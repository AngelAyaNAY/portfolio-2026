import Ring_01 from '../../assets/rings/Rings_02.png'
import '../../styles/rings.css';

const DIAMETER = 1600; // igual al tamaño visual que tenías antes

const RingsBack_2 = () => {
    return (
        <div
            className="ring_2"
            style={{
                '--diameter': `${DIAMETER}px`,
                '--img': `url(${Ring_01})`,
            }}
        >
            <div className="ring__face" />
        </div>
    )
}

export default RingsBack_2