import React , {useState , useRef, useEffect} from 'react'
import { StyleSheet, TextInput, View , Text , CheckBox , TouchableOpacity , ToastAndroid} from 'react-native'

const App = () => {
 
  const [ value1 , setValue1 ] = useState(0)
  const [ value2 , setValue2 ] = useState(0)
  const [ value3 , setValue3 ] = useState(0)
  

  const [ data1 , setData1 ] = useState(false)
  const [ data2 , setData2 ] = useState(false)
  const [ data3 , setData3 ] = useState(false)
  const [ result , setResult ] = useState('')

  const handlecheck = (operator) =>  {
    var results 
    if(data1 && data2 && data3){

      switch(operator){
        case 1 :
          results = value1 + value2 + value3
          setResult(results)
          break
        case 2 :
            results = value1 - value2 - value3
            setResult(results)
            break
        case 3 :
            results = value1 * value2 * value3
            setResult(results)
            break
        case 4 :
              results = (value1 / value2) / value3
              setResult(results)
              break
      }

    }else if(data1 && data2){
      results 
      switch(operator){
        case 1 :
          results = value1 + value2
          setResult(results)
          break
        case 2 :
            results = value1 - value2 
            setResult(results)
            break
        case 3 :
            results = value1 * value2 
            setResult(results)
            break
        case 4 :
              results = value1 /value2
              setResult(results)
              break
      }
    }else if(data1 && data3 ){
       results 
      switch(operator){
        case 1 :
          results = value1 +  value3
          setResult(results)
          break
        case 2 :
            results = value1 -  value3
            setResult(results)
            break
        case 3 :
            results = value1 *  value3
            setResult(results)
            break
        case 4 :
              results = value1 / value3 
              setResult(results)
              break
      }
    }else if(data2 && data3){
       results 
      switch(operator){
        case 1 :
          results =  value2 + value3
          setResult(results)
          break
        case 2 :
            results = value2 - value3
            setResult(results)
            break
        case 3 :
            results = value2 * value3
            setResult(results)
            break
        case 4 :
              results = value2 / value3 
              setResult(results)
              break
      }
    }else{
      ToastAndroid.show("Checkbox harus lebih satu" , 2000)
    }
    
  }
  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <View style={styles.item}>
          <TextInput style={styles.input} onChangeText={e => setValue1(parseInt(e))} />
          <CheckBox 
            value={data1}
            onValueChange={setData1}
          />
        </View>

        <View style={styles.item}>
          <TextInput style={styles.input} onChangeText={e => setValue2(parseInt(e))} />
          <CheckBox 
            value={data2}
            onValueChange={setData2}
          />
        </View>

        <View style={styles.item}>
          <TextInput style={styles.input} onChangeText={e => setValue3(parseInt(e))} />
          <CheckBox 
            value={data3}
            onValueChange={setData3}
          />
        </View>
      </View>

      <View style={styles.row2}>
        <TouchableOpacity style={styles.operation} onPress={() => handlecheck(1)}>
          <Text>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.operation} onPress={() => handlecheck(2)}>
          <Text>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.operation} onPress={() => handlecheck(3)}>
          <Text>X</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.operation} onPress={() => handlecheck(4)}>
          <Text>/</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row3}> 
          <View style={styles.gap}></View>
          <View style={styles.result}>
            <Text>Hasil : </Text>
            <Text>{result}</Text>
          </View>
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container : {
    flex : 1 ,
    flexDirection : 'column' ,
    padding: 40
  } ,

  row1 : {
    flexDirection : 'column' ,
    marginBottom : 20
  } ,

  item : {
    flexDirection : 'row' ,
    justifyContent : 'space-between' ,
    marginBottom : 28
  } ,

  input : {
    borderWidth : 2 ,
    flex: 0.7 ,
    paddingHorizontal : 8 ,
    paddingVertical : 3
  } ,

  row2 : {
    flexDirection : 'row' ,
    justifyContent : 'space-between'

  } ,

  operation : {
    borderWidth : 1 ,
    flexDirection : 'row' ,
    justifyContent : 'center' ,
    alignItems : 'center' ,
    flex:0.2 ,
    padding:15 ,
    borderRadius : 10
  } ,

  row3 : {
    marginTop : 25
  } ,

  gap : {
    height : 5 ,
    backgroundColor : 'black' ,
    marginVertical : 25
  } ,

  result : {
    flexDirection: 'row' ,
    justifyContent : 'space-between'
  }


})
