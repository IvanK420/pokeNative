import { Colors } from "@/constants/Colors";
import { useThemeColors } from "@/hooks/useThemeColors";
import { StyleSheet, Text, TextProps } from "react-native";

const styles = StyleSheet.create({
    body3: {
        fontSize: 10,
        lineHeight: 16
    },
    body1: {
        fontSize: 14,
        lineHeight: 16
    },
    body2: {
        fontSize: 12,
        lineHeight: 16
    },
    caption: {
        fontSize: 8,
        lineHeight: 16
    },
    headline: {
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight:32
    },
    subtitle3: {
        fontWeight: 'bold',
        fontSize: 10,
        lineHeight:16
    },
    subtitle1: {
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight:16
    },
    subtitle2: {
        fontWeight: 'bold',
        fontSize: 12,
        lineHeight:16
    },
})

type Props = TextProps & {
    variant ?: keyof typeof styles;
    color ?: keyof typeof Colors["light"]
}
export function Themedtext ({variant,color,style,...rest}: Props){
    const colors = useThemeColors()
    return <Text style={[styles[variant ?? 'body3'], {color: colors[color ?? "grayDark"]},style]} {...rest}/>
}
