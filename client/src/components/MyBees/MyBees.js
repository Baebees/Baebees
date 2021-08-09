import React, { useEffect } from 'react'
import { StyleSheet, FlatList, SafeAreaView, View, Image, TouchableWithoutFeedback } from 'react-native'
import Media from '../../scenes/Media'

const dataSource = [{src: "https://img.freepik.com/vecteurs-libre/homme-affaires-caractere-avatar-isole_24877-60111.jpg?size=338&ext=jpg"},
                    {src: "https://img.freepik.com/vecteurs-libre/homme-affaires-caractere-avatar-isole_24877-60111.jpg?size=338&ext=jpg"},
                    {src: "https://img.freepik.com/vecteurs-libre/homme-affaires-caractere-avatar-isole_24877-60111.jpg?size=338&ext=jpg"},
                    {src: "https://img.freepik.com/vecteurs-libre/homme-affaires-caractere-avatar-isole_24877-60111.jpg?size=338&ext=jpg"},
                    {src: "https://img.freepik.com/vecteurs-libre/homme-affaires-caractere-avatar-isole_24877-60111.jpg?size=338&ext=jpg"},]

const MyBees = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.gallery}>
            <FlatList
                data={dataSource}
                renderItem={({ item }) => (
                    <TouchableWithoutFeedback
                    onPress={()=>navigation.navigate('Media', { item })}
                    >
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'column',
                            margin: 1
                        }}>
                        <Image
                            style={styles.imageThumbnail}
                            source={{ uri: item.src }}
                        />
                    </View>
                    </TouchableWithoutFeedback>
                )}
                //Setting the number of column
                numColumns={3}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    gallery: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    imageThumbnail: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 100,
    },
  });
export default MyBees