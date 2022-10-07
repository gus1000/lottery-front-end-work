//components are like resuable pieces thart allow you to split
// the UI into independent resuable pieces

//they accept arbitrary inputs and return react elemetns desrving what should
//appear on the screen

//all components accept props as inputs
//hooks are enclosed in brackets...they are used to presserve local state
//this is the section where wie make our header or a nav bar or all the functionality for the connect button
//hooks are a way to keep track of state in our applications
import { useMoralis } from "react-moralis"
import { useEffect } from "react"
//the useEffect allows  you to perform side effects  in your components such as fetching data, updating dom and timers 
export default function ManualHeader(){
    const {enableWeb3, account, isWeb3Enabled, Moralis, deactivateWeb3} =  useMoralis() //usemoralis is a hook
    //this is a hook that keeps track of whether or not our metamask or account is connected 
    //let connected = false 
    // web 3 is a function we get from this useMoralis hook
    //automaticlly re renders account switches ,,,hooks are good whenver a value in a web page changes 
    //hooks keep track of states betwween renders 
    //button tags create a button 

    //our website doesn't know we are still connected b.c our website doesnt know we hit web3 enabled  already when we hit reffresh
    useEffect(() => {
        if (isWeb3Enabled) return
        if (typeof window !=="undefined"){
            if (window.localStorage.getItem("connected")){
                //enableWeb3()
            }


        }
        //enableWeb3()
        //the useEffect hook allows you to perform side effects in your components i.e fetch data, update dom &timers
        // no dependency array: run anytime something rerenders
        //careful with this b/c you might get circular renders 

    }, [isWeb3Enabled]) //useEffect will be listning to whether wb3enabled hanges
    //it runs twice b/c of strict mode 

    //blank dependency run once on


    useEffect(() => {
        Moralis.onAccountChanged((account) => {

            console.log(`Account changed to ${account}`)
            if (account == null) {
                window.localStorage.removeItem("connected")
                deactivateWeb3()
                console.log("Null account found")
            }

        })




    }, [])

    return(
        <div>
            {account ? (
                <div>
                    Connected to {account.slice(0,6)}...{account.slice(account.length - 4)}
                </div>
            ) : (
                <button 
                        onClick={async () => {
                            await enableWeb3() 
                            if (typeof window != "undefined")
                            {
                            
                                window.localStorage.setItem("connected", "injected")
                            }    
                        }}
                >   Connect
                </button>
            )}

            
        
        </div>
    )

}

// ? if it is, : means else:
//lagging indciators are measurements of what has previosly happended....a metric that takes a long time to impact or measure

//hooks are a way to  work with state and rerender  when someting changes and enalbe  web 3
//hooks are functions that let you hook into React state and lifecycle features from function compnenets
//they don't work inside classses...they let you use react wihtout classes


//use effect takes a function as a parameter and a depencie as a paraemter as well 