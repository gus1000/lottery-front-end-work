import '../styles/globals.css'
import {MoralisProvider} from "react-moralis"

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider initializeOnMount={false}> 
      <Component {...pageProps} />
    </MoralisProvider>
  )

}

export default MyApp
//yarn run dev to run our pages and create a local:host web page to work on
//index is our default page 
//out entry point to everything

//think of this as the whole front end 

//hooks allow function components to have access to state  and other react features
//making class components no longer needed