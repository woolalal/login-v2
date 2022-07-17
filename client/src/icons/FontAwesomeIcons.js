import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUp, faXmark, faCheck } from '@fortawesome/free-solid-svg-icons'

export const FacebookIcon = ({size, ...props}) => {
    return <FontAwesomeIcon icon={faFacebook} size={size} {...props}/>
}

export const TwitterIcon = ({size, ...props}) => {
    return <FontAwesomeIcon icon={faTwitter} size={size} {...props}/>
}

export const GithubIcon = ({size, ...props}) => {
    return <FontAwesomeIcon icon={faGithub} size={size} {...props}/>
}

export const ArrowUp = ({size, ...props}) => {
    return <FontAwesomeIcon icon={faArrowUp} size={size} {...props}/>
}

export const CancelIcon = () => {
    return <FontAwesomeIcon icon={faXmark} />
}

export const CheckIcon = () => {
    return <FontAwesomeIcon icon={faCheck} />
}