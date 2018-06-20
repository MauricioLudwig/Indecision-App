console.log('App.js is running!');

var app = {
    title: 'IndecisionApp',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

var user = {
    name: 'Summer',
    age: 30
};
var userName = 'Mike';
var userAge = 27;
var userLocation = 'New York';

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>
    }
};

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

ReactDOM.render(template, document.getElementById('app'));