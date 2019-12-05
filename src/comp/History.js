import React from 'react'

function History(props) {

    const data = [{
            title:"TSLA",
            text:"Tesla, Inc. , is an American automotive and energy company based in Palo Alto, California. The company specializes in electric car manufacturing. Tesla was founded in July 2003, by engineers Martin Eberhard and Marc Tarpenning, under the name Tesla Motors. The company's name is a tribute to engineer Nikola Tesla. In early Series A funding, Tesla Motors was joined by Elon Musk, J. B. Straubel and Ian Wright, all of whom are retroactively allowed to call themselves co-founders of the company. Musk, who formerly served as chairman and is the current chief executive officer, said that he envisioned Tesla Motors as a technology company and independent automaker, aimed at eventually offering electric cars at prices affordable to the average consumer. "
        },
        {
            title:"BTC",
            text:"Bitcoin (₿) is a cryptocurrency. It is a decentralized digital currency without a central bank or single administrator that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries."
        },
        {
            title:"XLM",
            text:"The lumen, often abbreviated XLM, is the protocol token of the Stellar network. One hundred billion lumens were created the instant Stellar went live, as part of the protocol’s design. These tokens play a unique role in the network’s operation.Lumens are available at every major cryptocurrency exchange."
        },{
            title:"LTC",
            text:"Litecoin was released via an open-source client on GitHub on October 7, 2011 by Charlie Lee, a Google employee and former Engineering Director at Coinbase. The Litecoin network went live on October 13, 2011. It was a fork of the Bitcoin Core client, differing primarily by having a decreased block generation time (2.5 minutes), increased maximum number of coins, different hashing algorithm (scrypt, instead of SHA-256), and a slightly modified GUI. During the month of November 2013, the aggregate value of Litecoin experienced massive growth which included a 100% leap within 24 hours. In May 2017, Litecoin became the first of the top 5 (by market cap) cryptocurrencies to adopt Segregated Witness. Later in May of the same year, the first Lightning Network transaction was completed through Litecoin, transferring 0.00000001 LTC from Zürich to San Francisco in under one second. "
        }
        ]
    
        // this for loop finds the title of the info from the data sheet and then displays it based on the props it is given by it's parent
    for(let i in data ){
        if(props.props === data[i]['title']){
        return (<div>{data[i].text}</div>)
        }
    }

}

export default History
