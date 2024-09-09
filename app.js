// Simple Server Create ----------------->
var http = require('http')

http.createServer(function(req,res){
    res.write('<h1>Hello, First NodeJS Server</h1>')
    res.end()
}).listen(2020,function(){
    console.log('Server run Sucess!')
})


// HTTP Request Methods -------------------->
Get()
Delete()
Post()
Put()
Options()
Head()


// Request Response Model ----------------->
var http = require('http')
var url = require('url')

var Server = http.createServer(function(req,res){
    if(req.url=='/'){
        res.write('<h1>Home</h1>')
        res.end()
    }
    else if(req.url=='/about'){
        res.write('<h1>About</h1>')
        res.end()
    }

    else if(req.url=='/contact'){
        res.writeHead(200,{'Content-Type':'text'})
        res.write('<h1>Contact</h1>')
        res.end()
    }

    else if(req.url=='/s'){
        res.write('<h1>Service</h1>')
        res.end()
    }

    
}).listen(5050,function(){
    console.log('Server run Sucessfully!')
})

// Node js URL Module ------------------>
var http = require('http')
var url = require('url')

http.createServer(function(req,res){
    var MyUrl = 'https://www.youtube.com/watch?v=JWnpfkA6V2A&list=PLkyGuIcLcmx2qXaZkjCL8-P78i2J5rDOa&index=12'
    var UrlObject = url.parse(MyUrl,true)

    var MyHost = UrlObject.hostname
    var MyPath = UrlObject.pathname
    var MySearch = UrlObject.search
    var MyHash = UrlObject.hash

    res.write(MyHost)
    res.end()
}).listen(9090)



// NodeJS File Systeam Module -------------->
// 1: readFile
// 2: writeFile
// 3: rename
// 4: exist
// 5: unlink
// 6: append
// 7: open
// 8: mkdir
// 9: rmdir
// 10: reddir

var http = require('http')
var fs = require('fs')

http.createServer(function(req,res){

    res.writeHead(200,{'Content-Type':'text/html'})
        fs.readFile('index.html',function(error,data){
            res.end(data)
        })
       

}).listen(6060,function(){
    console.log('Server run Sucess!')
})


// FS Module WriteFile ------------------->
var http = require('http')
var fs = require('fs')

http.createServer(function(req,res){
    fs.writeFile('demo.txt','',function(error,data){
        if(error){
            res.write('<h1>File write Fail</h1>')
            res.end()
        }
        else{
            res.write('<h1>File Write Sucess!</h1>')
            res.end()
        }
    })
}).listen(9090)


// FS Module rename --------------->
var http = require('http')
var fs = require('fs')

http.createServer(function(req,res){
    fs.rename('index.html','Text.txt',function(error,data){
        if(error){
            res.write('<h5>File rename Fail!</h5>')
            res.end()
        }
        else{
            res.write('<h5>File rename Sucess!</h5>')
            res.end()
        }
    })
}).listen(3030)

// FS Module unlink ---------------->
var http = require('http')
var fs = require('fs')

var Server = http.createServer(function(req,res){
    fs.unlink('Text.txt',function(error,data){
        if(error){
            res.end('<h6>File Delete Fail</h6>')

        }
        else{
            res.end('<h6>File Delete Sucess!</h6>')
        }
    })
}).listen(6060,function(){
    console.log('Server run Sucess!')
})

// FS Module Exists --------------->
var http = require('http')
var fs = require('fs')

var Server = http.createServer(function(req,res){
    fs.exists('app.js',function(data){
        if(data){
            res.end('True')
        }
        else{
            res.end('False')
        }
    })

})

Server.listen(2020,function(){
    console.log('Server run Sucess!')
})

// OS, Path -------------------------->
var os = require('os')
console.log(os.userInfo()) // Get userInfo
console.log(os.homedir()) // Get homedir
console.log(os.hostname) // Get hostname
console.log(os.totalmem()) // totalmem
console.log(os.freemem()) // freemem
var {freemem,totalmem} = require('os')

Path
var path = require('path')

console.log(__dirname) // Get Dir
console.log(__filename) // Get File Name
var extname = path.extname('type.tsx')
console.log(extname)
var join = path.join(__dirname + "/views")
console.log(join)

// Node JS With MySQL --------------------->
var mysql = require('mysql')

var DatabaseConnectionConfig = {
    host: "localhost",
    user: "root",
    password:"",
    database:'school'
}

var con = mysql.createConnection(DatabaseConnectionConfig)

con.connect(function(error){
    if(error){
        console.log('Connection Fail')
    }
    else{
        console.log('Connection Sucess!')
    }
})

// Insert Data --------->
var mysql = require('mysql')

var DatabaseConnectionConfig = {
    host:'localhost',
    user:'root',
    password:'',
    database:'school'
}

var con = mysql.createConnection(DatabaseConnectionConfig)
con.connect(function(error){
    if(error){
        console.log('Connection Fail')
    }
    else{
        console.log('Connection Sucess!')
        InsertData(con)
    }

})

// Data Insert Function --------->
function InsertData(con){
    let SQLQuery = "INSERT INTO `students_list`(`id`, `name`, `roll`, `class`, `phone`, `city`) VALUES ('[value-1]','[Rakibul islam]','[39]','[Eight]','[01904460080]','[Dhaka]')"
    con.query(SQLQuery,function(error){
        if(error){
            console.log('Data Insert Fail')
        }
        else{
            console.log('Data Insert Sucess!')
        }

    })

}


// Data Delete NodeJS MySql ------------>
var mysql = require('mysql')
var DatabaseConnectionConfig = {
    host:'localhost',
    user:'root',
    password:'',
    database:'school'
}

var con = mysql.createConnection(DatabaseConnectionConfig)
con.connect(function(error){
    if(error){
        console.log('Connection Error')
    }
    else{
        console.log('Connection Sucess!')
    }
})

// Data Delete ----------->
function Delete_DataByID(con){
    let SQLQuery = "DELETE FROM `students_list` WHERE `id`=`2`"
    con.query(SQLQuery,function(error){
        if(error){
            console.log('Data Delete Fail')
        }
        else{
            console.log('Data Delete Sucess!')

        }
    })
}

// Data Update Node MySQL -------------->
var mysql = require('mysql')

var DatabaseConnectionConfig = {
    host:'localhost',
    user:'root',
    password:'',
    database:'school'
}

var con = mysql.createConnection(DatabaseConnectionConfig)
con.connect(function(error){
    if(error){
        console.log('Connection Fail')
    }
    else{
        console.log('Connection Sucess')
        UpdateData(con)
    }
})

// Data Update Node MySQL --------->
function UpdateData(con){
    let SQLQuery = "UPDATE `students_list` SET `id`='[value-1]',`name`='[value-2]',`roll`='[value-3]',`class`='[value-4]',`phone`='[value-5]',`city`='['Dhaka]' WHERE 1"

    con.query(SQLQuery,function(error){
        if(error){
            console.log('Data Update Fail')
        }
        else{
            console.log('Data Update Sucess')
        }
    })

}


// Data Select Node MySQL ------------>
var mysql = require('mysql')

var DatabaseConnectionConfig = {
    host:'localhost',
    user:'root',
    password:'',
    database:'school'
}

var con = mysql.createConnection(DatabaseConnectionConfig)
con.connect(function(error){
    if(error){
        console.log('Connection Fail')
    }
    else{
        console.log('Connection Sucess!')
        DataSelect(con)
    }
})

// Data Select Node MySQL ----------------->
function DataSelect(con){
    var SQLQuery = "SELECT * FROM `students_list` WHERE 1"
    con.query(SQLQuery,function(error,result){
        if(error){
            console.log('Data Select Fail')
        }
        else{
            console.log(result)
        }
    })
} 


