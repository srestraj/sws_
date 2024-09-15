import HeadBanner from "../../components/heading/HeadBanner";
const Shop = () => {


const data = [
    {id:1 , images:"", title:"the cause and cure of malocclusion by prof john mew spanish edition", price:null, shoppingInfo:[],size:[],isAvailable:true  },
    {id:2 , images:"", title:"the cause and cure of malocclusion by prof john mew spanish edition", price:null, shoppingInfo:[],size:[],isAvailable:true  },
    {id:3 , images:"", title:"sleep with buteyko", price:20, shoppingInfo:[],size:[],isAvailable:true  },
    {id:4 , images:"", title:"Shut Your Mouth", price:18, shoppingInfo:[],size:[],isAvailable:true  },
    {id:5 , images:"", title:"Myo Mini", price:75, shoppingInfo:[],size:[],isAvailable:true  },
    {id:6 , images:"", title:"The Mew Indicator Ruler", price:16, shoppingInfo:[],size:[],isAvailable:true  },
    {id:7 , images:"", title:"Dial Calliper", price:16, shoppingInfo:[],size:[],isAvailable:true  },
]

  return (
    <>
      <HeadBanner headingsTitle={"Shop"} headingSlug={""} />


      <div className="grid grid-cols-4 gap-4 bg-light-white10">

{
    data?.map()
}


      </div>
    </>
  );
};

export default Shop;
/* Suggest a product for our upcoming Mewing Shop!




click here



*/
