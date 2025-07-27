import { useThemeColors } from "@/hooks/useThemeColors"
import { Link } from "expo-router"
import { Image, Pressable, StyleSheet, View, ViewStyle } from "react-native"
import { Card } from "../Card"
import { Themedtext } from "../ThemedText"

type Props = {
    style?: ViewStyle,
    id : number,
    name : string
}
export function PokemonCard({style,id,name}:Props){
    const colors = useThemeColors()
    return <Link href={{pathname:"/pokemon/[id]", params:{id:id}}} asChild>
        <Pressable android_ripple={{color:colors.tint}} style={style}>
            <Card style={[style, styles.card]}>
        <View style={[styles.shadow, {backgroundColor:colors.grayBackground}]} />
        <Themedtext style={styles.id} variant="caption" color="grayMedium">#{id.toString().padStart(3,'0')}</Themedtext>
        <Image 
        source={{uri:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}}
        width={72}
        height={72}
        />
        <Themedtext> {name} </Themedtext>
    </Card>
        </Pressable>
    </Link>
}
const styles = StyleSheet.create({
    card: {
        position: 'relative',
        alignItems : 'center',
        padding: 4
    },
    id: {
        alignSelf : 'flex-end'
    },
    shadow : {
        position: 'absolute',
        bottom:0,
        left:0,
        right:0,
        height:44,
        borderRadius:7,


    }
})