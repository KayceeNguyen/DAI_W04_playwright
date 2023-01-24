import styles from '@/styles/Home.module.css'
import Link from "next/link"

export default function About() {
    return (
        <>About Page
        
        <div className={styles.grid}>
            <Link rel="backToHome" href='/' >
            Go Back
            </Link>
        </div>
        
        
        </>
    )
        
    }