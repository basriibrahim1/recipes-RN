import { Heading, Spinner, View } from 'native-base'
import React from 'react'

const Loading = () => {
  return (
    <View display={'flex'} flexDirection={'row'}>
        <Spinner size={'sm'} marginRight={2} color="warning.500"/>
        <Heading color={'white'} fontSize={15}>Loading</Heading>
    </View>
  )
}

export default Loading