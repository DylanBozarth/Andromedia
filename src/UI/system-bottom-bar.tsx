import styles from '../styles/user-interface-master.module.css'
import { useEffect } from 'react';
import { System } from '../utils/system-generator/generate-sector';
interface systemInformation {
    playerSystem: System;
}

export const SystemBottomBar = ({ playerSystem }: systemInformation) => {
    useEffect(() => {
        console.log('from the bar', playerSystem)
    }, [])
    return (
        <div>
        <div className={styles['system-bottom-bar']}>
            <div className={styles['bottom-bar-section']}></div>
<div className={styles['bottom-bar-section']}>Buildings in Progress
<br />
Love shack-planet 5, 78% 4hr 15min remaining</div>
<div className={styles['bottom-bar-section']}>System Power 
<br /> Hangar 700<br /> Planetary defenses 3000</div>

        </div>
        <h4 className={styles['system-title']}>{playerSystem.systemName}, {playerSystem.systemStar} system. <br />
        {playerSystem.ownership !== 'unowned' ? `${playerSystem.ownership}'s system` : 'Unclaimed System'}</h4>
        </div>
    )
}