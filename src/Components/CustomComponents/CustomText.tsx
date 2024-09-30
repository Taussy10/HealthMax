import { StyleSheet, Text, View, TextStyle } from 'react-native';
import React, { FC } from 'react';
import { Fonts } from '../../utils/Constants';
import { moderateScale } from 'react-native-size-matters';
import { Colors } from '../../utils/Constants';

interface Props {
    //variant use for consistent design 
    variant?:
    "h1" |
    // | is union sign that till H1 to H9 all are in union then if not H1 to H9 then 
    // it will show body text
    "h2" |
    "h3" |
    "h4" |
    "h5" |
    "h6" |
    "h7" |
    "h8" |
    "h9" |
    "body";
    // body means pargarph(P1) text
    fontFamily?: Fonts;
    fontSize?: number;
    style?: TextStyle | TextStyle[];
    children?: React.ReactNode;
    numberOfLines?: number;
    onLayout?: (event: object) => void;
}

const CustomText: React.FC<Props> = ({
   variant = 'body',
    fontFamily = Fonts.Regular,
    fontSize, // Take fontSize prop
    style,
    children,
    numberOfLines,
    onLayout,
    ...props
    // Rest operator cause it is use in function if in object literal then will be  known
    // as spread operator 
    // convert all other into [variant , fontFamily ....]
}) => {
    // Calculate default fontSize based on variant
    let computedFontSize: number;

    switch (variant) {
        case 'h1':
            computedFontSize = moderateScale(fontSize || 22);
            break;
        case 'h2':
            computedFontSize = moderateScale(fontSize || 20);
            break;
        case 'h3':
            computedFontSize = moderateScale(fontSize || 18);
            break;
        case 'h4':
            computedFontSize = moderateScale(fontSize || 16);
            break;
        case 'h5':
            computedFontSize = moderateScale(fontSize || 14);
            break;
        case 'h6':
            computedFontSize = moderateScale(fontSize || 12);
            break;
        case 'h7':
            computedFontSize = moderateScale(fontSize || 11);
            break;
        case 'h8':
            computedFontSize = moderateScale(fontSize || 10);
            break;
        case 'h9':
            computedFontSize = moderateScale(fontSize || 9);
            break;
        default:
            computedFontSize = moderateScale(fontSize || 12); // Default body size
            break;
    }

    // Use the fontSize prop if provided, otherwise use the computed font size
    // const finalFontSize = fontSize !== undefined ? fontSize : computedFontSize;

    return (
        <View>
            <Text
                onLayout={onLayout}
                style={[
                    styles.text,
                    {
                        color: Colors.text,
                       // we have put the hardcore value of color so it can't change

                       // fontSize: fontSize, // Use final font size

                         fontSize: computedFontSize, // by using computed size it taking default value 
                        // not hardcore value so it can change

                        fontFamily: fontFamily,
                        // not hardcore value so it can change

                    },
                    //styles.text,
                    style,
                    // for new style that will be overwritten because or prefrence
                ]}
                numberOfLines={numberOfLines !== undefined ? numberOfLines : undefined }
                {...props}
            >
                {children}
            </Text>
        </View>
    );
}

// Priority order in styles(Prefrence)
//the later styles have higher priority


export default CustomText;

const styles = StyleSheet.create({
    text: {
        textAlign: 'left', 
        fontSize: 34
    }
});
