const Card = (props) => {
    return (
        <div style={{margin: '1em'}}>
            <img src={props.avatar_url} />
            <div style={{display: 'inline-block', marginLeft: 10}}>
                <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
                	{props.name}
                </div>
                <div>{props.company}</div>
            </div>
        </div>
    );
};

const CardList = (props) => {
    return (
        <div>
            <Card 
                name="imthefrizzlefry"
                avatar_url="https://avatars1.githubusercontent.com/u/8007606?v=4"
                company="null"
            />
        </div>
    )
}

ReactDOM.render(<CardList />, mountNode);