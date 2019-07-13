Vue.component('login-app', {
    // Paste in the HTML below
    template: `
        <div class="the-cooler-container">
            <img src="logo.png" alt="" class="logo">
            <input v-model="user" type="text" placeholder="IDENTIFIER" />
            <input v-model="pass" type="password" placeholder="ACCESS CODE" />
            <button @click="login">AUTHORISE</button>
        </div>
    `,
    data: function() {
        return {
            user: "",
            pass: "",
            credentials: [
                {
                    user: "RLY-0016-3",
                    pass: "SOMEPASSWORD",
                    name: "Rolly",
                    displayableRank: ""
                },
                {
                    user: "61288-2001-LT",
                    pass: "SOMEPASSWORD",
                    name: "L. Talbot",
                    displayableRank: "PO3"
                }
            ]
        }
    },
    methods: {
        login: function() {
            // Get  an uppercase'd username
            var userUpper = this.user.toUpperCase();

            // Iterate over credentials
            for (var credential of this.credentials) {
                // Check username
                if (userUpper == credential.user) {
                    // Check password
                    if (this.pass == credential.pass) {
                        // Print out a welcome message
                        if (credential.displayableRank) {
                            alert(`Welcome ${credential.displayableRank} ${credential.name}`);
                        } else {
                            alert(`Welcome ${credential.name}`)
                        }

                        // Clear the credential fields
                        this.user = "";
                        this.pass = "";

                        return;
                    } else {
                        // Print out an error
                        alert("Incorrect access code");

                        return;
                    }
                }
            }

            // Print out an error
            alert("Could not find user '" + this.user + "'");
        }
    }
});

new Vue({ el: '#app' });
