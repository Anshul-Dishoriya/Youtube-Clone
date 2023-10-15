import React from 'react'
import moment from 'moment'


const VideoLength = ({ time }) => {
  const videoLengthInSeconds = moment()
    .startOf('day')
    .seconds(time)
    .format('H:mm:ss')


  return (
    <div className='absolute bottom-1 right-1 py-1 px-2 text-white text-sm rounded-lg bg-black'>
      {videoLengthInSeconds}
    </div>
  )
}

export default VideoLength