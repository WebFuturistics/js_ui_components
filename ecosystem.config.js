'use strict';

// @flow

// external imports

// local imports

// exports
module.exports = {
    apps : [
        {
            name: 'js_ui_components',
            script: 'npm',
            args: 'run start-frontend-style-guide-server',
            env: {
                serverPort: 9027,
            },
        }
    ],
};
