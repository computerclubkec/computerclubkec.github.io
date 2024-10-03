# KEC Computer Club Website

Welcome to the official repository for the **KEC Computer Club** website! This website is built using **Jekyll** and containerized with **Docker** to streamline development and deployment.

## About KEC Computer Club

The **Computer Club of Kantipur Engineering College (KEC)** was founded in 2013 to provide students with a platform to explore technology, develop new skills, and collaborate on innovative projects. Our website serves as a hub for club activities, events, and resources.

## Project Structure

- `_config.yml`: Jekyll configuration file.
- `index.html`: The main homepage of the website.
- `_layouts/`: Jekyll layout templates.
- `_includes/`: Reusable components (e.g., headers, footers).
- `assets/`: Contains images, stylesheets, and JavaScript files.
  - `css/`: Custom stylesheets.
  - `js/`: JavaScript files.
  - `images/`: Logos and visuals used on the website.

## Getting Started

### Website Prototype
On the basis of [this Figma design](https://www.figma.com/design/dWPncZwMB3Im5qntztKgpe/Computer-Club-Website?node-id=0-1&t=snFpqhd7gHsoBQL7-1), the club website is planned to be developed.

### Prerequisites

To work on this project, ensure you have the following installed:

- [Docker](https://www.docker.com/) (for running the site locally in a container)
- [Jekyll](https://jekyllrb.com/) (for building and serving the site)
- [Git](https://git-scm.com/) (for version control)
- [Tailwind CSS](https://tailwindcss.com/) (for utility-first CSS framework)

### Running the Project Locally with Docker

1. Clone the repository:

`git clone https://github.com/kec-computer-club/website.git`
   
2. Navigate to the project directory:

`cd path_to_your_folder`

3. Build and run the Docker container:

`docker compose up`

4. Access the website by navigating to _http://localhost:4000_ in your browser.

### Running Locally Without Docker

If you prefer not to use Docker, you can run Jekyll directly:

1. Install Jekyll and dependencies by following the official [Jekyll installation guide](https://jekyllrb.com/docs/installation/).

2. Serve the website locally:

`jekyll serve`

3. Visit the website at _http://localhost:4000_.

### Contributing

Please refer to the [contributing.md](CONTRIBUTING.MD) file for detailed instructions on how to contribute to this project. It outlines the workflow for making changes, submitting pull requests, and reviewing contributions.

### File Conventions
To maintain code consistency and best practices, we follow specific conventions for structuring files and code. Please refer to the [NAMING-CONVENTION.md](NAMING-CONVENTION.md) document for more information.

### Contributors 
Thanks goes to these wonderful people who have contributed for the project:

[![Contributors](https://contrib.rocks/image?repo=computerclubkec/computerclubkec.github.io)](https://github.com/computerclubkec/computerclubkec.github.io/graphs/contributors)


### Contact
For more information or to collaborate, feel free to reach out to us:

**Email:** _computerclub@kec.edu.np_
**Location:** Dhapakhel, Lalitpur

Thank you for contributing to the KEC Computer Club's website!
