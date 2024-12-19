# Taller Code Test

Create a simple RESTful API using Node.js and Express that allows users to manage a list of tasks.

## Project Structure

```bash
.
├── .gitignore
├── LICENSE
├── package.json
├── README.md
├── src/
│ ├── controllers/
│ ├── index.js
│ ├── middlewares/
│ ├── routes/
│ ├── services/
│ ├── utils/
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/EverCabarcas/TallerTest.git
```

2. Navigate to the project directory:

```bash
cd taller
```

3. Install the dependencies:

```bash
npm install
```

### Running the Project

To start the server, run:

```bash
npm start
```

To start the server in development mode with nodemon, run:

```bash
npm run dev
```

The server will be running at http://localhost:3000.


## API Endpoints

| Endpoint                         |                            Body                            |
| -------------------------------- | :--------------------------------------------------------: |
| GET /tasks - Retrieve all tasks  |                             {}                             | 
| POST /tasks - Create a new task  |                    {id, title, completed}                  | 
| PUT /tasks/:id - Update a task   |                   {id, title, completed}                   | 
| DELETE /tasks/:id -Delete a task |                             {}                             |


## Author

Ever Cabarcas - evercabarcasmallarino@gmail.com

## License

This project is licensed under the MIT License - see the LICENSE file for details.
