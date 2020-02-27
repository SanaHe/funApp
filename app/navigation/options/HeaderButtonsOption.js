import * as React from 'react'
import {View, StyleSheet} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

const HeaderButtonsOption = navigation =>{
    return {
        headerLeft: () => (
            <SimpleLineIcons name="bell"
                             size={25}
                             onPress={() => navigation.navigate('Information')}
            />

        ),
        headerRight: () => (
            <View  style={styles.headerRightButton}>
                <SimpleLineIcons name="magnifier"
                                 size={25}
                                 onPress={() => navigation.navigate('Search')}
                />
                <SimpleLineIcons name="options"
                                 size={25}
                                 onPress={() => navigation.navigate('Setting')}
                />
            </View >

        ),
    }
}

const styles=StyleSheet.create({
    headerRightButton:{
        display:'flex',
        flexDirection:'row',
    }
})

export default HeaderButtonsOption
