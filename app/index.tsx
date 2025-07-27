import { Card } from "@/components/Card";
import { PokemonCard } from "@/components/pokemon/Pokemoncard";
import { Themedtext } from "@/components/ThemedText";
import { getPokemonId } from "@/functions/pokemon";
import { useInfiniteFetchQuery } from "@/hooks/useFetchQuery";
import { useThemeColors } from "@/hooks/useThemeColors";
import { ActivityIndicator, FlatList, Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const colors = useThemeColors()
  const {data, isFetching, fetchNextPage} = useInfiniteFetchQuery('/pokemon?limit=21')
  const  pokemons = data?.pages.flatMap(page=>page.results) ?? []
  return (
    <SafeAreaView
      style={[styles.container,{backgroundColor: colors.tint}]}
    >
      <View style={styles.header}>
        <Image source={require("@/assets/images/pokeball.png")} width={24} height={24}></Image>
     <Themedtext variant="headline" color="grayLight"> Pokédex </Themedtext>
      </View>
      <Card style={styles.body}>
          <FlatList 
          data={pokemons} 
          numColumns={3}
          columnWrapperStyle={styles.gridGap}
          contentContainerStyle={[styles.gridGap,styles.list]}
          ListFooterComponent={
            isFetching ? <ActivityIndicator color={colors.tint}/> : null
          }
          onEndReached={()=>fetchNextPage()}
          renderItem={({item}) => <PokemonCard id={getPokemonId(item.url)} name={item.name} style={{flex:1/3}}>
          </PokemonCard>} keyExtractor={(item)=>item.url}/>
      </Card>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex:1,
    padding:4,

      },
      header:{
        flexDirection:'row',
        alignItems: 'center',
        gap:16,
        padding:12
        
      },
      body: {
        flex:1
      },
      gridGap: {
        gap:8
      },
      list: {
        padding: 12
      }
})