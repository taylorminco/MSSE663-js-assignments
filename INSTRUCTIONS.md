# Assignment Instructions

## Table of Contents

- [Week 1 - Hello World](##week-1-hello-world)
- [Week 2 - Components and Routing](##week-2-components-and-routing)
- [Week 3 - Mongo and Services](##week3-mongo-and-services)
- [Week 4 - Component Architecture and Forms](##week-4-component-architecture-and-forms)
- [Week 5 - State Management](##week-5-state-management)
- [Week 6 - Pipes and Directives](##week-6--pipes-and-directives)
- [Week 7 - Complex Components & Component References](##week-7-complex-components-and-component-references)
- [Week 8 - Deployment Strategies](##week-8-deployment-strategies)

---

## Week 1 - Hello World

### Overview

Angular gives us a full suite of out-of-the-box tools we can use to jump start developing.
To kick things off, we'll be greating a basic 'Hello World!' application using Angular.

### Steup

```bash
$ git checkout main
$ git checkout -b week1
```

### Instructions

1. First we'll need to make sure we have the Angular cli tools globally available. In a new terminal window, enter the following commands:

```bash
$ npm install -g @angular/cli
```

2. In a project folder of your choice, we'll need to generate a new Angular application:

```bash
$ ng new class-app
```

> For the purposes of this class, we'll call this `class-app`.

3. In the interactive menu, select `N` to skip routing and `SCSS` as the styles we'll be using.

This created a new folder and, would normally, instantiate a new git instance to begin making pushes, but because we're inside a git instance having cloned the assignments repo, it'll skipp this step.

Now that that's created, we're going to test run the app.

1. Enter the following command in a terminal:

```bash
$ ng serve
```

2. And open a browser pointed to `http://localhost:4200`.

Notice that the app is running with a pre-generated tamplate and styles.

Angular uses a default template with styles in a newly-created application, but we don't want to use this.

1. In `app.component.ts`, replace the string for `title` with 'Hello World!'.
2. Then in `app.component.html`, delete everything there, and replace with:

```html
<h1>{{ title }}</h1>
```

3. While the server's still running, save these files and see the changes reflect in the browser window.

### Submitting

Submit your assignment by pasting the url of you Github link for the week in WorldClass.

Ex.: https://github.com/morgnism/MSSE663-js-assignments/tree/master/week2

---

## Week 2 - Components and Routing

### Overview

TBD

### Steup

```bash
$ git checkout week1
$ git checkout -b week2
```

### Instructions

TBD

### Submitting

Submit your assignment by pasting the url of you Github link for the week in WorldClass.

Ex.: https://github.com/morgnism/MSSE663-js-assignments/tree/master/week3

---

## Week 3 - Mongo and Services

### Overview

TBD

### Steup

```bash
$ git checkout week2
$ git checkout -b week3
```

### Instructions

TBD

### Submitting

Submit your assignment by pasting the url of you Github link for the week in WorldClass.

Ex.: https://github.com/morgnism/MSSE663-js-assignments/tree/master/week3

---

## Week 4 - Component Architecture and Forms

### Overview

TBD

### Steup

```bash
$ git checkout week3
$ git checkout -b week4
```

### Instructions

TBD

### Submitting

Submit your assignment by pasting the url of you Github link for the week in WorldClass.

Ex.: https://github.com/morgnism/MSSE663-js-assignments/tree/master/week4

---

## Week 5 - State Management

### Overview

TBD

### Steup

```bash
$ git checkout week4
$ git checkout -b week5
```

### Instructions

TBD

### Submitting

Submit your assignment by pasting the url of you Github link for the week in WorldClass.

Ex.: https://github.com/morgnism/MSSE663-js-assignments/tree/master/week5

---

## Week 6 - Pipes and Directives

### Overview

TBD

### Steup

```bash
$ git checkout week5
$ git checkout -b week6
```

### Instructions

TBD

### Submitting

Submit your assignment by pasting the url of you Github link for the week in WorldClass.

Ex.: https://github.com/morgnism/MSSE663-js-assignments/tree/master/week6

---

## Week 7 - Complex Components and Component References

### Overview

TBD

### Steup

```bash
$ git checkout week6
$ git checkout -b week7
```

### Instructions

TBD

### Submitting

Submit your assignment by pasting the url of you Github link for the week in WorldClass.

Ex.: https://github.com/morgnism/MSSE663-js-assignments/tree/master/week7

---

## Week 8 - Deployment Strategies

### Overview

TBD

### Steup

```bash
$ git checkout week7
$ git checkout -b week8
```

### Instructions

TBD

### Submitting

Submit your assignment by pasting the url of you Github link for the week in WorldClass.

Ex.: https://github.com/morgnism/MSSE663-js-assignments/tree/master/week8
