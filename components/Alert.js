// import styles from './Alert.module.css'

// const Alert = (props) => {
//     const { children, type } = props;
//     if (type === 'success') return <div className={styles.success}>{children}</div>
//     if (type === 'error') return <div className={styles.error}>{children}</div>
// }

// export default Alert;


import styles from './Alert.module.css'
import cn from 'classnames'

export default function Alert({ children, type }) {
    return (
        <div
            className={cn({
                [styles.success]: type === 'success',
                [styles.error]: type === 'error'
            })}
        >
            {children}
        </div>
    )
}