import '../../styles/Subscribe.css'
// import icons
import Youtube from '../../assets/icons/youtube.svg'
import Instagram from '../../assets/icons/instagram.svg'
import Twitter from '../../assets/icons/twitter.svg'
function Subscribe({ props }) {
    const [name, object] = props
    const items = Object.entries(object)
    const icons = {
        youtube: Youtube,
        instagram: Instagram,
        twitter: Twitter
    }
    const defaults = {
        youtube: (query) => `https://www.youtube.com/results?search_query=${query.split(' ').join('_')}`,
        instagram: (query) => `https://www.instagram.com/explore/tags/${query.split(' ').join('')}`,
        twitter: (query) => `https://twitter.com/search?q=${query.split(' ').join('%20')}`
    }

    return (<aside className={`Subscribe`}>
        {items.map((item, index) => {
            let [app, link] = item
            link = link || defaults[app](name)
            return (<figure className={app} key={index}>
                <img src={icons[app]} alt={app} />
                <a target={`_blank`} href={link}>{app}</a>
            </figure>)
        })
        }
    </aside >)

}
export default Subscribe