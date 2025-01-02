import './lang-representation.scss'

export function LanguageRepresentation(props) {
    const { languages } = props

    const total = Object.values(languages).reduce((a, b) => a + b, 0);
    const percentage = {};
    Object.keys(languages).forEach(key => {
        percentage[key] = languages[key] / total * 100;
    })
    return (
        <div className='languages'>
            {Object.keys(percentage).map(key => <div className='language' key={key}>{`${key.toLocaleUpperCase()}`}</div>)}
        </div>
    )
}