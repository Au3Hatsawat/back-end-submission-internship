## Installation & Run

```bash
git clone https://github.com/Au3Hatsawat/back-end-submission-internship.git
cd back-end-submission-internship
npm install
```

## Structure

```bash
├── app
│   ├── app.go
│   ├── handler          // Our API core handlers
│   │   ├── common.go    // Common response functions
│   │   ├── projects.go  // APIs for Project model
│   │   └── tasks.go     // APIs for Task model
│   └── model
│       └── model.go     // Models for our application
├── config
│   └── config.go        // Configuration
└── main.go
```
