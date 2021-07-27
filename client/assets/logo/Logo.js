import React, { useRef, useLayoutEffect } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { TweenMax } from 'gsap'
const Logo = () => {
    let doggo = useRef(null)
    useLayoutEffect(() => {
        TweenMax.from(doggo, 0.5, {
             opacity: 0
        }).then(() => {
            TweenMax.fromTo(doggo, 1, {
                rotation: 0
            }, {
                rotateX: 20,
                delay: 1,
                repeat: -1,
                yoyo: true,
            })
        })
    }, [])

    return(
        <View style={styles.container}>
            <Image 
            ref={el => doggo = el}
            style={{width: '10rem', height: '10rem'}}
            source={require('./logoo.svg')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
    }
})

export default Logo