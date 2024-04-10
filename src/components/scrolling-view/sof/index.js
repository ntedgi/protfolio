import React, { useState, useEffect } from 'react';
import './sof.scss'
import {
    setItemInCache,
    getItemFromCache,
    has
} from '../cache'

export default function SOFContainer() {
    const [state, setState] = useState(null)
    const cacheKey = `SOF_ME2`
    const URI = "https://api.stackexchange.com/2.3/users/4267015?site=stackoverflow"
    useEffect(
        () => {
            if (has(cacheKey)) {
                setState(getItemFromCache(cacheKey))
            }
            else {
                fetch(URI)
                    .then(res => res.json())
                    .then(data => {
                        const {badge_counts,reputation} = data.items[0]; 
                        debugger
                        setState({badge_counts,reputation})
                        setItemInCache(cacheKey, {badge_counts,reputation})
                    })
            }
        }, [cacheKey])

    if (state == null) {
        return (
            <div>No Data</div>
        )
    }
    return <div>{JSON.stringify(state)}</div>
}