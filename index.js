Vue.component('login-app', {
    // Paste in the HTML below
    template: `
        <div class="ui middle aligned centre aligned grid">
            <div class="column">
                <div class="login-form">
                    <div class="logo"></div>
                    <br>
                    <input type="text" class="ui input" placeholder="AUTHENTICATION NAME">
                    <br>
                    <input type="password" class="ui input" placeholder="PASSWORD">
                    <br>
                    <button type="button" class="ui inverted orange button">
                        AUTHENTICATE <i class="long arrow alternate right icon" />
                    </button>
                </div>
            </div>
        </div>
    `
});

new Vue({ el: '#app' });
