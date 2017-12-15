{"presets": [ "es2015","react" ],
      "plugins":[
        "transform-async-to-generator",
         "transform-decorators-legacy",
       [
        "transform-runtime",
        {
            "polyfill": false,
            "regenerator": true
        }],
        [
          "import",
            {
              "libraryName": "antd-mobile",
              "style": "css"
            }
          ]
        ]
    }
