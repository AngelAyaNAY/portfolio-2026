import Ring_01 from '../../assets/rings/Rings_01.png'
import '../../styles/rings.css';

const DIAMETER = 1055; // igual al tamaño visual que tenías antes

const RingsBack_1 = () => {
    return (
        <div
            className="ring"
            style={{
                '--diameter': `${DIAMETER}px`,
                '--img': `url(${Ring_01})`,
            }}
        >
            <div className="ring__face" />
        </div>
    );
}

export default RingsBack_1