import React from 'react'
import ('./Entry.css');
function Entry({entry,timestamp}) {
    return (
        <div className="entry">
            {entry}
        </div>
    )
}

export default Entry
