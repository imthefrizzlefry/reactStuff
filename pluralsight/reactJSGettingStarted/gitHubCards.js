const Card = (props) => {
    return (
        <div style={{margin: '1em'}}>
            <img width="75" src={props.avatar_url} />
            <div style={{display: 'inline-block', marginLeft: 10}}>
                <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
                	{props.name}
                </div>
                <div>{props.company}</div>
            </div>
        </div>
    );
};

let data = [
    {   name: "imthefrizzlefry",
        avatar_url: "https://avatars1.githubusercontent.com/u/8007606?v=4",
        company: "none" },
    {   name: "someone",
        avatar_url: "http://placehold.it/75",
        company: "null" }
];

const CardList = (props) => {
    return (
        <div>
            {props.cards.map(card => <Card />)}
        </div>
    )
}

ReactDOM.render(<CardList cards={data} />, mountNode);