import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import Icons from "react-native-vector-icons/FontAwesome"



export default function App() {
  return (
    <View style={styles.container}>
     <View style={styles.header}>
     <Icons name="arrow-circle-left" size={30}  />
     <Icons name="cart-plus" size={30} style={styles.icons}  />
     </View>

     <View style={styles.img}>
     <Image style={styles.tinyimg}
        source={require('./assets/1.png')}
      />
     </View>

     <View style={styles.info}>
       <Text style={styles.infotext}>Bike Jacket</Text>
       <View style={styles.infostars}>
         <Text style={styles.infostar}>Review  :</Text>
         <Icons name="star" color={"gold"} size={15} style={styles.star}  />
         <Icons name="star" color={"gold"} size={15} style={styles.star}  />
         <Icons name="star" color={"gold"} size={15} style={styles.star}  />
         <Icons name="star" color={"gold"} size={15} style={styles.star}  />
         <Icons name="star" color={"grey"} size={15} style={styles.star}  />
       </View>
       <View style={styles.line}></View>
       <View>
         <Text style={styles.infotxt}>It is a long established fact that reader will be distracted 
         by the readable content of a page.</Text>
       </View>


       <View style={styles.box}>
         <Text style={styles.boxtext}>
           Material:91% polyester, 9% elastane
         </Text>
       </View>
     </View>


     <View style={styles.sizes}>
      <View style={styles.size}>
        <Text style={styles.sizetext}>XS</Text>
      </View>

      <View style={styles.size}>
        <Text style={styles.sizetext}>S</Text>
      </View>

      <View style={styles.sizesc}>
        <Text style={styles.sizetxt}>M</Text>
      </View>

      <View style={styles.size}>
        <Text style={styles.sizetext}>L</Text>
      </View>

      <View style={styles.size}>
        <Text style={styles.sizetext}>XL</Text>
      </View>
     </View>


    

    <View style={styles.add}>
      <View>
    <Text style={styles.addtext}>Total Amount</Text>
    <Text style={styles.addtxt}>$110</Text>
    </View>
    <TouchableOpacity style={styles.addbtn}>
      <Text style={styles.btntxt}>Add to Cart</Text>
    </TouchableOpacity>
    </View>


   



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f4f4fb"
  },

  header: {
    flexDirection: "row",
    // justifyContent: "center",
    marginTop: 20
  },

  icons: {
    marginLeft: 300,
  },

  img: {
    backgroundColor: "white",
    height: 170,
    width: 170,
    borderRadius: 50,
    marginTop: 30,
    alignSelf: "center"
  },

  tinyimg: {
    height: 170,
    width: 170,
  },

  infotext: {
    fontSize: 25,
    paddingHorizontal: 16,
    marginTop: 20,

  },

  infostars: {
    paddingHorizontal: 16,
    flexDirection: "row"
  },
  star: {
    marginTop: 3,
    marginLeft: 5
  },

  line: {
    height: 5,
    width: 50,
    marginLeft: 16,
    marginTop: 15,
    backgroundColor: "#757def"
  },

  infotxt: {
    paddingHorizontal: 16,
    marginTop: 10,
    fontSize: 15,
  },

  box: {
    backgroundColor: "white",
    height: 50,
    marginTop: 15,
    marginLeft: 16,
  },

  boxtext: {
    padding: 10,
    fontSize: 20,
    color: "#757def"
  },

  sizes: {
   flexDirection: "row",
   marginTop: 15,
   marginLeft: 8
  },

  size: {
    backgroundColor: "white",
    height: 50,
    width: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10
  },

  sizetext: {
    fontSize: 20
  },

  sizesc: {
    backgroundColor: "#757def",
    height: 50,
    width: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20
  },

  sizetxt: {
    color: "white",
    fontSize: 20
  },

  add: {
    backgroundColor: "#757def",
    height: 70,
    marginLeft: 16,
    borderRadius: 16,
    marginTop: 15,
    flexDirection: "row"
  },

  addtext: {
    paddingHorizontal: 16,
    color: "white",
    marginTop: 6
  },

  addtxt: {
    paddingHorizontal: 16,
    color: "white",
    fontSize: 25
  },

  addbtn: {
    backgroundColor: "blue",
    height: 50,
    width: 110,
    borderRadius: 12,
    marginLeft: 80,
    marginTop: 10 
  
  },

  btntxt: {
   marginLeft: 10,
    color: "white",
    fontSize: 18,
    marginTop: 10
  }

});
