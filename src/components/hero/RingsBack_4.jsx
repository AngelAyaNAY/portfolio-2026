import Ring_01 from '../../assets/rings/Rings_04_rule.png'
import '../../styles/rings.css';

const DIAMETER = 2140;

const RingsBack_4 = () => {
    return (
        <div
            className="ring_4"
            style={{
                '--diameter': `${DIAMETER}px`,
                '--img': `url(${Ring_01})`,
            }}
        >
            <div className="ring__face" />
        </div>
    )
}

export default RingsBack_4