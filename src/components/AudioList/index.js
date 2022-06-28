import React from 'react'
import './style.css';
import { backIcon } from '../../assets';


const AudioList = ({onBackButtonPress}) => {
  return (
    <div className='audio-ls p-20'>
        <div onClick = {onBackButtonPress}className='audio-ls-header'>
            <img src={backIcon}/>
        </div>

        <ul className='mtb-10'>
            <li className='audio-ls-container'>
                <div className='audio-ls-item flex align-center ptb-5'>
                    <div className='audio-img'>
                        <img />
                    </div>
                    <div className='audio-info mlr-10'>
                        <p>Beyond the line</p>
                        <p>Rizwan khan</p>
                    </div>
                </div>

                <div className='audio-ls-item flex align-center'>
                    <div className='audio-img'>
                        <img />
                    </div>
                    <div className='audio-info mlr-10'>
                        <p>Beyond the line</p>
                        <p>Rizwan khan</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default AudioList;