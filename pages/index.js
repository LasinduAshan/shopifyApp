import {
  Page,
  Card,
  Layout,
  Button,
  Form,
  FormLayout,
  TextField,
  Stack,
  Label,
  type,
  DataTable,

} from "@shopify/polaris";
import { from } from "apollo-boost";

import { useState } from "react"
import { ResourcePicker } from "@shopify/app-bridge-react";
import { formatError } from "graphql";


let rows;

class Index extends React.Component {

  constructor() {
    super()
    this.state = {
      sampleData: [],
    };

  }
  //   fetch('https://my-app.com/customers', {
  //     headers : { 
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //      }
  // })
  // .then(response => response.json())
  // .then(parsedJSON => {
  // console.log(parsedJSON);

  // // Update state
  // // this.setState(...);
  // })
  // .catch(error => console.error(error));


  // getDate() {
  //   return fetch('http://192.168.43.94:3000/customer', {
  //       method: 'GET',
  //       headers : { 
  //               'Content-Type': 'application/json',
  //               'Accept': 'application/json'
  //              }
  //   }).then((response) => response.json()).then((parsedJSON) => {
  //       console.log(parsedJSON)
  //   })

  //  console.log("gatData function called");


test = ()=>{

}

  //}


  // client.product.fetchAll(5).then((products) =>{
  //   console.log(products);
  // });



  handleSelection = (resources) => {
    const idFromResources = resources.selection.map((product) => product.title);
    const priceFrom = resources.selection.map((idFromResources) => idFromResources.variants);
    const vendor = resources.selection.map((product) => product.vendor);
    let verndorName = vendor[0];

    this.setState({ open: false })
    console.log(resources)
    //console.log(vendorName);
    // title=idFromResources[0]
    // console.log(idFromResources[1]);
    // console.log(priceFrom)

    // for (let index = 0; index < idFromResources.length; index++) {
    //   console.log(idFromResources[index]); 
    // }

    for (let index = 0; index < priceFrom.length; index++) {
      //const element = priceFrom[index];
      //console.log(priceFrom[index][0].price);

      var title = idFromResources[index];
      const prize = priceFrom[index][0].price;
      //console.log(title+"             "+prize);

      const discount = prize * 5;
      discount /= 100;
      // console.log(discount);
      // console.log(title + "             " + prize + "               " + (prize - discount));

     // rows [index] = [title, prize, (prize-discount), 140, '$122,500.00'];
     this.setState({
      sampleData:[...this.state.sampleData, [title, prize, (prize-discount), "5%", verndorName]]
    });
      
        // DataTable.rows = {rows}
        DataTable.apply = { rows }

      //console.log(data);

    }

    

    console.log(this.state.sampleData);

  }


  state = { open: false }
  render() {


    // getCollections = () => {
    //   var fetchUrl = "/api/custom_collections";
    //   var method = "GET";
    //   fetch(fetchUrl, { method: method })
    //   .then(response => response.json())
    //   .then(json => console.log(json))
    // }

    ////////////////////////////////////////////////////////////////////////////////////////////////////

    // const [isDiscount, setDiscount] = useState('10')

    // const hadleChange1 = () =>{
    //     return (value) => setDiscount(value)
    // }

    // const hadleSubmit1 = () =>{
    //   alert(isDiscount)
    // }

    /////////////////////////////////////////////////////////////////////////////////////////////////////

    // let title = "Bag"
    // rows = [
    //   [title, '1000.00', 950, 140, '122,500.00'],
    // ];


    return (
      <Page
        title='Product Selector'
        primaryAction={{
          content: "Select Products",
          onAction: () => this.setState({ open: true })
        }}
      >
        <ResourcePicker
          resourceType='Product'
          open={this.state.open}
          onCancel={() => this.setState({ open: false })}
          onSelection={(resources) => this.handleSelection(resources)}
          onAction={this.getDate}
        />

        <label title="Sales by product">
          <Card>
            <DataTable
              columnContentTypes={[
                'text',
                'numeric',
                'numeric',
                'numeric',
                'numeric',
              ]}
              headings={[
                'Product',
                'Price',
                'Discount',
                'Discount Presentage',
                'Vendor',
              ]}

              rows={this.state.sampleData}
              totals={['', '', '', '', '']}
            />
          </Card>
        </label>
      </Page>

    )
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////

  //   handleSelection=(resources) =>{
  //     const idFromResources = resources.selection.map((product) => product.title);
  //     const priceFrom = resources.selection.map((idFromResources) => idFromResources.variants);

  //     this.setState({open: false})
  //     console.log(resources)
  //    // title=idFromResources[0]
  //    // console.log(idFromResources[1]);
  //    // console.log(priceFrom)

  // // for (let index = 0; index < idFromResources.length; index++) {
  // //   console.log(idFromResources[index]); 
  // // }

  //     for (let index = 0; index < priceFrom.length; index++) {
  //       //const element = priceFrom[index];
  //       //console.log(priceFrom[index][0].price);

  //       var title = idFromResources[index];
  //       const prize = priceFrom[index][0].price;
  //       //console.log(title+"             "+prize);

  //       const discount = prize*5;
  //       discount /=100;
  //       console.log(discount);
  //       console.log(title+"             "+prize+"               "+(prize-discount));

  //       // const rows = [
  //       //   [title, prize, 124689, 140, '$122,500.00'],
  //       // ];


  //     }



  //   //   getCollections = () => {
  //   //     var fetchUrl = "/admin/api/2021-01/product.json";
  //   //     var method = "GET";
  //   //     fetch(fetchUrl, {
  //   //         method: method
  //   //     })
  //   //     .then(response => response.json())
  //   //     .then(json => console.log(json))
  //   // }


  //   }
}




// const Index = () => {


//   const [isDiscount, setDiscount] = useState('10')

//   const hadleChange = () =>{
//       return (value) => setDiscount(value)
//   }

//   const hadleSubmit = () =>{
//     alert(isDiscount)
//   }




//   return(

//   <Page>
//       <Layout>
//           <Layout.AnnotatedSection
//              title="Default discount"
//              description="Shopify and your customers will use this information to contact you."
//   >
//                  <Card sectioned>
//                    <form onSubmit={hadleSubmit}>
//                      <FormLayout>
//                         <TextField
//                           onChange ={hadleChange()}
//                           value={isDiscount}

//                           label='discount precentage'
//                           type='discount'
//                         />
//                         <stack distribution='trailing'>
//                           <Button primary submit>
//                               save
//                           </Button>
//                         </stack>
//                      </FormLayout>
//                    </form>
//                  </Card>
//           </Layout.AnnotatedSection>
//       </Layout>

//       <Layout>
//         <Page
//             title='Product Selector' 
//             primaryAction={{
//               content: "Select Products",
//               onAction: () => console.log("clicked")
//             }}
//         />


//       </Layout>

//   </Page>  
//   )
// };



export default Index;
