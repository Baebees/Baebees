import React, { cloneElement, Children, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions, ScrollView } from 'react-native'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from '../../theme/colors'
import { useIsFocused } from '@react-navigation/native'
import { Avatar } from 'react-native-elements';
import Comment from '../Comment'
import Like from '../Like'
const { height, width } = Dimensions.get('screen')

const Bee = (props) => {
    const [comment, isComment] = useState(false)
    const [isCommentlVisible, setCommentVisible] = useState(false);
    const [isLikeVisible, setLikeVisible] = useState(false);
    const toggleComment = () => {
        setCommentVisible(!isCommentlVisible);
        setLikeVisible(false)
    };
    const toggleLike = () => {
        setLikeVisible(!isLikeVisible)
        setCommentVisible(false)
        isComment(false)
    }
    const isFocused = useIsFocused();
    const { children: child } = props
    return (
        <View style={Styles.container}>
            <View style={Styles.owner}>
                <Avatar
                    rounded
                    containerStyle={{ borderWidth: 3, borderColor: colors.gray, borderStyle: 'solid' }}
                    size="medium"
                    source={{
                        uri:
                            'data:image/jpeg;base64,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',
                    }}
                    onPress={() => props.navigation.navigate('UserProfile', { from: 'Home' })}
                />
                <TouchableOpacity style={Styles.description}>
                    <Text style={Styles.text}>Samoyed</Text>
                    <Text style={Styles.text}>today at 05:30</Text>
                </TouchableOpacity>
            </View>
            {cloneElement(Children.only(child), { videoURI: '...' })}
            <View style={Styles.stats}>
                <Text style={Styles.likes} onPress={toggleLike}>5 Likes</Text>
                <Text style={Styles.comments} onPress={toggleComment}>3 Comments</Text>
            </View>
            <View style={Styles.reaction}>
                <FontIcon
                    style={Styles.icon}
                    name="heart"
                    // color={colors.lightBlack}
                    size={25}
                />
                <FontIcon
                    style={Styles.icon}
                    onPress={() => {
                        isComment((prev) => !prev)
                        setLikeVisible(false)
                    }}
                    name="comment"
                    // color={colors.lightBlack}
                    size={25}
                />
            </View>
            {comment && <View style={Styles.post}>
                <View style={Styles.postComment}>
                    <Avatar
                        rounded
                        containerStyle={{ borderWidth: 3, borderColor: colors.gray, borderStyle: 'solid' }}
                        size="small"
                        source={{
                            uri:
                                'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFRYZGRgaHBgYHBwYGBgYGBgYGBgZGhoYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzQrJCs0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAACBQEGB//EADQQAAIBAwMDAgQGAgICAwAAAAECAAMEERIhMQVBUSJhBhNxgTKRobHB8BTR4fEVUgcjQv/EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAnEQACAgICAgIBBAMAAAAAAAAAAQIRAyESMQRBEyJRFDJhgQVxkf/aAAwDAQACEQMRAD8AWa51N6eJWq5J5iVKrjBha1yDxPnVhadHq8tGnRuhpwfEoijJP3mSr5MlR3HeH6WtpkcnRuUXA3jNt1EDOZ5+nUYiNUlBG5jeBXsTlZqLULnVOvUxEqLN24jr2+pc95hOEYy2EpaM9s6o1TdQI1bWgwC05VtWqPikhbHOAcCU3zSilsz5MxK3VSMrjaAsKmXz3M0rnoVR9QVCNIJYkYxjt9Yt0uxKnft7d51fGoY3KqJ5Ns1HBGNoG5UDcxrXvv2mdfZY+04McvtUSm9bJUrKRtFWY5jL9LcIr4wG/bAP8wq2JUZM7VBx22Qm2Et7rIwZxRqJPbtBtadxLlCowJjKC/cmO/yK1VBb2jqOgXSOYqyHjEWR9DZaOSVJEsP1AZOmZzqeJrpUVzqid+mneaqP1tdmDtMVRNtos6BmxLJd4yIFXIbMqF3sLH6NYJtKVH1nIlLetlvVxOqw1bcRy48k12Dk2iq1GXbE1krZQdojdXC9p162FExyx5dDjLVDOT5kiX+QZJh8bKCpQ0nBlaluI1XXeBdptDI+2zpUkkZrMVMsbo43jVVBuZmVqmTgTti1JCcqGql1gbRqz3AyeZnBFbAjtCn6l8CZ5JdJEOWzdthjA8zVVBiJWihsN2EFW6j69K/SeXkU5T+qL5IaphncIvcgfTM95YWy0kCKPGT5OJmdA6YECufxY1H6lRwO0duqx1KoB3PPYT3PD8VYY8pdsxk+TpDKLkkHcGY3UfhrUS9JgpJyVbjJ5we036NPbeHxO2eKE48ZKzPk07R84Xoty7mmEII5Y7IPfV3+027H4M0kM9TVjBKgbH2z4nrlMjNMcfh4ou0geSTEq3T0IAYbDfEyeq0KbqUCKNtiAAQZp9QqEKcb+08zZ3ZdmzyD24zNppPTQ4rVnm7tyh0/aLiuSZ6DrPSyxNQAtkDYDjbn3nmWXQd9jPEz4ZY7XopzCtVKtEupVgwyBGKo1LmZ9xsuDyZePGuOzFzbZ2jd6EziWeqag34hDZZQRd3ZRgCXUbpFU+2LC3JJ09oQU/MLa1wMgyrpneS5uMq9A6B2zDfMBUQ5yOIyHGMAbzjUzKTinbBK0JtVPEslR2jFZABxvJ04ZO8m13QKky2lvE7H9pJOvwXoZruOIB1AGZy8YZyIa0pa1nG/qrZt3szbipttBW1IEHzHr2wIO0Aild8ZM6I5LjpibOULPBxD1k0DEVo3jatxiPKpfcyJOSlbJVCX/kKi+kcR3o1i9WoDwoILE539hGWooMbbz3HwpaLoD6cfvtOjxZfJOkv9sl6VnoLWnhAPAA/KESkM5hMSrPPcSMrCEzmqL/MzLqYxBdUE9SBqVcRZ6nkwAZq7iYSdO0Ozaixbzjb2A7TRS5ztC5Bg0mNSaEbmgzJhecT5/wBTo6GYHOfOCBn28z6eqzC6301W9W35fzObyMPON/gR4Sk2VwJR0Un1do3dUdAISZa02Y78zzE5cq9AqoaeuSNKwaWbkZIhrdAp3hb29ZBlcYhtXxRrFrpmeluc7iWu9gAojFC8Lj8P98y3UKiogzzI4yT32ElFmZSoNmXd9HInbe6HbEI4DH1SpRerQuNLQNailSYBKuOJe6IXZYKiNo6vREVbJ8xpIbT9JI+KL4mlfuuniLW1y4wFEpfXynaL2l0ScTGOF/Htf9Oi1Zr1ahI3O87Yptlok1QahvHKlXC7TnnFrS9kSey9S0U78Q9taEcbzKrXRAxHen3bacd4nGXHYlVmxa2i6hqGQSBzifQ7CmAgAGBiea+HrDVh3B874/aetRcCez/j8DxwcpdsynK3RVjAshMKwkG09Egy+r1q9KnqoUhVbO6htLY8jb1fSV+Ha1zUQtc0vlPqOFBBymBg87HkfabSiRmCgknAHJPaA7APQnifib4he2qqn+PUdCBlkQkZOcAeTtxPZL1Okx0rUQnjGoZ/KDrc5joRk2RZ1VyjISAdLYDDPZgCd4/TGOYVGE7iAiuqAuaYZSIZhJiAHzvqoFEkEc55xMKzq5Yme5+K7FWXVpBI3nz7XpJGMTy8+PjPXQJWw91Vy3MXqVCRgnadbB52lVUZxJUUkaRQ7b3KIkW69do6ro5id04G2YtTpljhY8cUvswrZLbImgr6iBBC2KfillcE7SnUnaH0hm5oDbBkp0wNpQnEXeuczGMa7IbraNH5UkQ+c3mSVwX4FzYataA8SlGgVPE0TVAOZ2tWHONpxLLNKjo9WZt5SYEEQ9IttmMtU1LtAfNOMYjUnJUydj62StgzS6VY+sZ/v5TK6UcHLttNynXGtdDcntkzOCl8qi3qytJHv+mIAowP0xNDMQ6YMIMkn68/eOs0+lXRzlWaL1quN4R2itRSeIWNIPa3YY6e/IHkeZlfGvzDa1BSYq4GRpGWwOcDO57/AGja0N9Q/EOJ434m6/XIKLRB9RQ5Y5BGDkYHBBGD7wuuyowcn9T55YVbmpWVFdyQ25IIwdvW+PwnbOJ9sW5BTngcz5Ja9WqowY0lGTnbIPJH37T1nSepNXQ+kqOCT38ge0SkloUoSXZ6e1uS54/6mqHwJkWFNgO00qanvKsmgoWcaQuBAPVjAQ60hKHSMnHcZny92HzCxHGcifTuq1PQcz5jf1su3J9zPP8AM7RUXQvf11YjTA06THfG04jAmPNfDToA3nO5NRSSNNPZmXVLvHun0cLrMXuEJ3MjVWOAOJblcSPZe6d2GYXolPLYI3951rtUADTStLpPxqN5z/LKKqv7NGk0KXqaHwe8A1L2mhc09bap1ioGDzJWbprszkkZXyzJHcSS/nkRSMwXO8bdyV2iottTjHAmoaQEnNKCaSWze3QnaVyuxh6jAmVFHJ2hGo7yEot2uxoSr0HYYBP1m98OIyupP5n+8w1nbg4yJo1AqgBRvOaXlNSSroOJ7zptXK/75jbTC+GwxXJ4+nM3Wn0mKXKCl+TFqmDZZDLYlGliA1GI3E818UKQBUUEj/8AQAzp2A7dtp6SqYvXG3Els2xy4ys+afLDldwNsHIwF86vf2noekUQAqrnQuwzyfLGbFXpynfSM/zCW1kF7SFbdl5cikOUDtCmpBIuJVvaao5mdcyuRBO2ZTB7RpiK9QfCHIyMGfN7i21MxUEDJ57T6gi7YM8d8T11RsY58D/jac3lwcoXHtDilezylK2Vdz+LOJytT31YnTgtqB5jlFAw3nkvI4uzXQnVwVl6QTSBB3gKggRFKmFyTKVyiJsZ6vart3iVvXOpVHGYJ74s2ORBsxDZE68UGo1Iiz2IYKoxzM66qNnjeZ9j1A61DHaa/V7pPSVxOeWFxyVFdjStWxLW05Kf5wkl/DIQShVOraEq3BMJaW+MymQH3mUlGTbXo19HKFbxG6RZmGBmDWmNWRNKxqhG3kSaUbSGjUpU9KjVC0qYZl8HvFalbXNTogGsZ7dhODx8anmSl7Zcn9T2PTqARAB4jTCVpHYS8+uSSVI5ATShEMRBssBgWEGyc5hXEGUk0OwSrtOMveF07YnAkEgbAnfiCZIZqYEIi+JVEi3yRLiniGYeZWUhFMTxvx7bFqeRjb6ZH0JM9izTzPxnU/8ApYaTjHI7fpFLoD5n0ip6wHP6z0l2iIoIPM8Sr4bOY290xwCdp5eTx1KVlKXo1L27Ggzz1S4JGDHa9bKxEJmaY8aj2U3Y/wBEoBjvNC86cAciJdKcA4jXUbvTMZc/mpPQ3XEQuEC8cwTVDjJgfnljGfl5E7HS7IQvqMkZ+RJDkgo9XqGMTJuCFfeatAAjMWuKaZyZ4uJ02mavYW3weIWtRwASYrbPudM0VcMArHE04yT29Dj0N0nUIJpdIvhrAP8A3MwqoAA3jNphGVjtOTE1HKn/ACW/20fSLZ8qIWZXTbxWAAbJmkWn1SaatHKdcys4TITACrCVxIWlWO0BnGMqzSheTV3iAtzK5xKfNHaUepiUIu7wTVIGrcADmZ1XqPiLkkI0y+Zl/EvTzVoso557/wAQlpUJ3M08ZXEpbQHwWvYsrnPkwLz0nxkhSuwHB3/6nl3ec0lugCudpRGhPktp1EbS9smd5DZaBL6TqO0FWuC8YqLq2jNn0/BB/ePS2ybFbC3bV6hNpaaiMVKenBil0/cTkyPlK7BSaDfIX2nJn/5ZkgK2bVtUMvcUsjaRaRA2lalZgMYnPq+SNIuuyiOqDneL3Nc/iBlq9i5GvMUtxk4M6YcXG7sOXo0+jV3LEniOdUujjCmI2utQSIxRQH1HmefkjH5OXo05UqNn4Feq9bDfhG537/nPp7LPGfAaA62xwcc7flPame74+8adGL7AFsSgfMtWSAB0ibCLs0qzbQYq5EoawxAZ0yrNtBvWEVuKu20lsRV7nB+8BWuj2lGE4wi2IA7s0lOhC4hKUaiKxi3p4EdTiApwyzRDPlv/AMg1F+bpU79x4zPN2lizMM8Znqvji3JuRx9cdvB3gfkimgPecPkTlF/UAlxaIUCnG0yGsDuVGFjnzDkd5rLT1pgbbTz5eRKP9lxVo8olr6gY0LnDaQJo00VDgxW6ZS+UE35Nx2zNsNdKSmczLd+0aauRs0Rd94Q7qg1QP5Uk7qMk24sZ6KjVOJFcE7wOk4gC+nmcUsf4FyNZxtjtM8WoDZzC21yW2MXu6L59I2k44yTq6KUkjRCjHO0ioMEiZVOuwVgeZLa8P4RJ+CVuiuaPpPwCvoY++w7T15M8d8CIQjE8k/p2nrnae5gVY0ibs5UiVbiNgxWvtNGAsq7GUZYX5glXbbaIBSrgQLneVucn+YFauMyG9jCFcSSqVMytR8RpknC0LTMWzDI0aYDlFozmJUXEYVt8S0wPI/G1socPrVTgc6s7eNOczx63OrYtq98ED9Z9av8AoiVypffHaZXUPhRMH5agGc+WDdtITPEU6ZxntD0LvQD9IZ6RTUjDGCRMyqMPp7Znl5MSsFJpkpMGLFu/Eba2VUzNS0tU0Azty6Y0y1OLQrtnmyQe28r/AIZbsZrW9qmubFOmniDnTtBZ43/x7+JJ7DCySvmkFs4KKTz/AFIDVtNJbjaZtdCxzMIN3sbS9Bel41bzbcLg7TBtkKmOtXYjiVLb0IxeofjOICz2cRy6t2JziIvTZTxOmLVUB9Q+GLpVTJ/47f7E9YXyMz4t0zq7oQCDjx+0+rdDvg9Nc/iwCR9Z14Wq4lI1qG4g69PaGoLidqzcZkPT3h3p9pKnMYYftEkBm1qW0zLhPVibN0eBMiuPVmTJABSniWWkc5MboUZeoMCCiIzqqRWjcerQftHqoiPyssDE7T0CNKmIyj7xUOAIW3PeWmBq02hM9onTeG1ywPF/F9LQwZe88zVphgMHfP8AM958UUNdM7AkceftPnleg6Hfb27/AJTz8+O5MVGzbZC4gbojG3MrZVP/AGgHYhz4nEoJdiaKUywbM0hcHEQB3lneNRV0NIL/AJBkimqSb/GiqNhbQSwtRD4nQJxbMrAJarCrRHidEsDCxWDNuDANYqdyI4J0iUrHYibFfE3uh1flkYySSNv5PntEUTM9N0Xow2d2z4AGB+u86vHUnK0UrPQ0TtO1ROcbTlRp6pYhc+ZdKmUBlLk7GJ2tX0lfBkt7ANX3MyrhvWFmkz7GZtJdVU+20zk+kBpUl2i9ePBYhdmaCEaxlVAHM4TmAqknYSJOgQZAWPtHqKwdJNKxikI0AdBDDiUSFbiWgACmGJWIXfw+h30jJ77/AO5ppzmPZBicVLsSPCXfTFThcn2G0y61ljfSB/frPotzRDDx9J5286cBkg/mZyZsHtBZ5RrXvKCl5mrXp42G8UdJwu4sal/Bn/JEke0iSLmyuZo+3b+8TvbM63ic7TOzEG8ucY95US9SJfkTIkuRImwnGlrQDPTiC42zv9vvPc0n9I447cT57SfBnoaPUfRkcgH9f6J3eLkjFNMuLNuvcdx2/fJH8QL3ORnzMird+lt/xDV9Odvz/eWo1/SB4/1OhZU2Ox52wpzMRa5D58xq4usrjzM9uZOSfVDTNF62IPpR9TH3EVqVdobpZwGb3/aQp3JDs3ah9JmReOI69fYjP9xMi5qDE3lNJCBfMkpDeCR9ozSxvMXOwCPX3AjFGvv9pi13wTKLdkEn6TD9VxlsVnqUqiFDieao9Q7R2jfZOCZ0Q8iMgs1mfeGNTaZr3AxzBteYxNuaQzYZsxavSBG4Bg0uAZYVQTnxtKtNEmRUslJ2GDM25t9/YTduzg7czLvHyu04M0I/2XejN0DxOwWqSc1E8htpw8TmZJjZBwLLicMmqC0IIvEpUEsDOGaehAgYxRfECyyyHeKLpjQwKh/cfniFtquedsZ/OKkzgM1jOmVY4XyPpA694EvITHKdhZ0tG7WtpU5/uYiZ0PtM4zcXYWavzxpJzvn9Jn3NTMXLkSL6pTzuSoLCo+wjCPFNMurwU2VZ2uP1ibiMV6mYBpjkSkSwPEnzSDmXIg2WZJOPQjQpXZIwTJUr+DM9BDATp+WTVBZp291tLrdEb95mqcQhaaLPKqKQeveknPeKmpmBdpBJ5ybtis5pEkmZI7EHM6JJJzCIZySSUIv2nRJJLQHGkEkkTGW7TgkklDZUy0kkQEle0kkhgCaGo8ySSUNF2lPMkk0Q2BacaSSSxFDIZJJIji8wqSSSkB0SzySRoYBpYSSTRCJJJJGB/9k=',
                        }}
                    />
                    <TextInput
                        style={Styles.input}
                        placeholder="Add a comment..."
                        multiline
                    />
                    <TouchableOpacity>
                        <FontIcon
                            name="paper-plane"
                            size={25}
                        />
                    </TouchableOpacity>
                </View>
            </View>}
            {isCommentlVisible && <ScrollView style={Styles.commentsContainer}>
                <Comment />
            </ScrollView>}
            {isLikeVisible && <ScrollView style={Styles.commentsContainer}>
                <Like />
            </ScrollView>}
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: colors.darkGray
    },
    reaction: {
        alignItems: 'center',
        flexDirection: 'row',
        height: height * 0.05
    },
    icon: {
        marginLeft: 10,
    },
    owner: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: 'center'
    },
    description: {
        marginLeft: 10,
    },
    text: {
        fontWeight: "500"
    },
    stats: {
        alignItems: 'center',
        flexDirection: 'row',
        height: height * 0.05,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.darkGray,
    },
    likes: {
        marginRight: 10,
        justifyContent: 'center'
    },
    input: {
        // height: 40,
        width: width * 0.7,
        borderWidth: 2,
        borderColor: colors.darkGray,
        borderRadius: 20,
        paddingHorizontal: 10
    },
    post: {
        alignItems: 'center',
        justifyContent: 'center',
        height: height * 0.10,
        borderTopWidth: 1,
        borderTopColor: colors.darkGray,
    },
    postComment: {
        width: width * 0.9,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    commentsContainer: {
        padding: 10,
        borderTopWidth: 1,
        maxHeight: height * 0.4,
        borderTopColor: colors.darkGray
    }
})

export default Bee