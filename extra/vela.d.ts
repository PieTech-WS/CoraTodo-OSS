declare global {
    namespace file {
        function writeText()
        interface writeTextObj {
            uri: String,
            text: String,
            encoding?: String,
            append?: Boolean,
            success?: Function,
            fail?: Function,
            complete?: Function
        }
    }
}

export {};