import React from 'react'

function History(props) {

    const data = [{
            title:"TSLA",
            text:"Tesla, Inc. , is an American automotive and energy company based in Palo Alto, California. The company specializes in electric car manufacturing. Tesla was founded in July 2003, by engineers Martin Eberhard and Marc Tarpenning, under the name Tesla Motors. The company's name is a tribute to engineer Nikola Tesla. In early Series A funding, Tesla Motors was joined by Elon Musk, J. B. Straubel and Ian Wright, all of whom are retroactively allowed to call themselves co-founders of the company. Musk, who formerly served as chairman and is the current chief executive officer, said that he envisioned Tesla Motors as a technology company and independent automaker, aimed at eventually offering electric cars at prices affordable to the average consumer. "
        },
        {
            title:"BTC",
            text:"Bitcoin (₿) is a cryptocurrency. It is a decentralized digital currency without a central bank or single administrator that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries."
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
