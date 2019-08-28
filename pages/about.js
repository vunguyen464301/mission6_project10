import React from 'react';
import Document, { Html, Main, NextScript } from 'next/document'
import Head from 'next/head'

class about extends React.Component{

    render(){
        return(
            <div>
            <Head>
              <title>About</title>
            </Head>
            <div>
                This is about
            </div>
        
        </div>
        )
    }
}

export default about;