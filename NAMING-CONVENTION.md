# Git Branch and Commit Message Naming Conventions

This guide provides essential conventions for naming Git branches and commit messages in **KEC Computer Club repository**. Use the following links to quickly navigate to the relevant sections:

### Table of Contents
- [Branch Naming Convention](#git-branch-naming-convention)
  - [Structure of a Branch Name](#structure-of-a-branch-name)
  - [Prefix](#1-prefix)
  - [Description](#2-description)
  - [Best Practices](#best-practices)
  - [Examples of Complete Branch Names](#examples-of-complete-branch-names)
  
- [Commit Message Naming Convention](#commit-message-naming-convention)
  - [Structure of a Commit Message](#structure-of-a-commit-message)
  - [Type](#1-type)
  - [Scope (Optional)](#2-scope-optional)
  - [Description](#3-description)
  - [Body (Optional)](#4-body-optional)
  - [Footer (Optional)](#5-footer-optional)
  - [Using the "!" Symbol](#using-the-symbol)
  - [Examples of Complete Commit Messages](#examples-of-complete-commit-messages)
  - [Using Commit Messages for Releases](#using-commit-messages-for-releases)
  - [Best Practices](#summary-of-best-practices-1)


--- 


# Git Branch Naming Convention

This guide outlines the branch naming structure for our repository, ensuring clarity and organization for all contributors. Following these conventions will help streamline collaboration and maintain a clean codebase.

### Structure of a Branch Name

Each branch name should consist of a **prefix** followed by a **description**. The general structure is:

```
<prefix>/<description>
```

Let's break down each component:

1. [Prefix](#1-prefix)
2. [Description](#2-description)

### 1. **Prefix**
The prefix indicates the type of work being done. Use one of the following predefined prefixes:

- **feature/**: For new features or enhancements.
  - Example: `feature/add-login-page`
- **bugfix/**: For bug fixes.
  - Example: `bugfix/fix-navigation-crash`
- **hotfix/**: For urgent fixes that require immediate attention.
  - Example: `hotfix/update-security-patch`
- **refactor/**: For code restructuring without adding features or fixing bugs.
  - Example: `refactor/restructure-database-code`
- **enhancement/**: For improving existing features.
  - Example: `enhancement/improve-performance`
- **chore/**: For maintenance tasks (e.g., dependency updates).
  - Example: `chore/update-dependencies`
- **docs/**: For documentation-related changes.
  - Example: `docs/update-readme`
- **test/**: For adding or updating tests.
  - Example: `test/add-unit-tests`
- **style/**: For purely cosmetic changes (e.g., formatting).
  - Example: `style/fix-indentation`
- **experimental/**: For testing new ideas or designs.
  - Example: `experimental/new-ui-design`
- **release/**: For preparing a new release.
  - Example: `release/1.0.0`

### 2. **Description**
The description should provide a concise summary of the branch's purpose. It should aim for clarity and brevity, avoiding unnecessary jargon. It should clearly communicate what the branch is about.

- Example: `bugfix/fix-login-error` is descriptive and clear.

## Best Practices

- **Be Consistent**: Use the same prefixes and formatting across the project to avoid confusion.
- **Keep It Short**: Limit the description to a few words; avoid overly long names.
- **Use Hyphens and Slashes**: Hyphens improve readability, while slashes help categorize branches.
- **Avoid Special Characters**: Stick to alphanumeric characters, hyphens, and slashes to prevent issues in Git.

## Examples of Complete Branch Names

### Example 1: Feature Branch
```
feature/add-user-profile
```

### Example 2: Bugfix Branch
```
bugfix/fix-cart-total-calculation
```

### Example 3: Hotfix Branch
```
hotfix/patch-security-vulnerability
```

---

### Summary of Best Practices:
- Use **clear prefixes** to indicate branch types.
- Keep descriptions **concise and informative**.
- Maintain **consistent naming** across the team.
- Avoid special characters and overly long names.

This convention will help maintain an organized and efficient repository for all contributors

---


# Commit Message Naming Convention

This guide outlines the commit message structure for the KEC Computer Club website repository. Following this convention will make it easier for contributors to understand the purpose of changes and for future contributors to track issues or features.

### Structure of a Commit Message

Each commit message should consist of a **type**, and a **short description**. Optionally, you can include a **optional scope**, **detailed body** and **footer**. The general structure is:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Let's understand how to configure each of them. The structure includes:
1. [Type](#1-type)
2. [Scope (Optional)](#2-scope-optional) 
3. [Description](#3-description)
4. [Body (Optional)](#4-body-optional)
5. [Footer (Optional)](#5-footer-optional)

### 1. **Type**
The type indicates the nature of the change being committed. Use one of the following predefined types:

- **feat**: A new feature or enhancement.
  - Example: `feat: add contact form connected with EmailJs and recaptcha service`
- **fix**: A bug fix.
  - Example: `fix: resolve navigation crash on mobile`
- **docs**: Documentation changes only (e.g., updating README files).
  - Example: `docs: update contribution guidelines`
- **style**: Code changes that do not affect logic (e.g., formatting, missing semi-colons, white-space).
  - Example: `style: fix indentation in CSS`
- **refactor**: Code changes that neither add a feature nor fix a bug, but improve structure or performance.
  - Example: `refactor: restructure user authentication module`
- **test**: Adding or updating tests.
  - Example: `test: add unit tests for login component`
- **chore**: Maintenance tasks that don’t fit into other categories (e.g., updating dependencies or build scripts).
  - Example: `chore: update npm packages`
- **perf**: A code change that improves performance.
  - Example: `perf: optimize API call response time`
- **build**: Changes that affect the build system or external dependencies.
  - Example: `build: update webpack configuration`
- **ci**: Changes to our CI configuration files and scripts.
  - Example: `ci: add GitHub Actions for testing`

### 2. **Scope** (Optional)
The scope specifies which part of the project is affected by the commit (e.g., a specific module or feature). Scopes help clarify the context of the change, but they are optional.

- Example with scope: `feat(events): add event registration page`
- Example without scope: `feat: add event registration page`

This way, the example better reflects the kind of work likely to be done on the Computer Club website.

### 3. **Description**
The description should provide a concise summary of the change (in present tense). It should be no longer than 50 characters and avoid unnecessary punctuation.

- Example: `fix: resolve issue with navbar not collapsing`

### 4. **Body** (Optional)
The body can provide additional context or details about the change. It should be used to explain **what** and **why** the change was made (avoid explaining **how**, since the code itself should be self-explanatory). Each line in the body should be wrapped to 72 characters.

- Example:
  ```
  feat(auth): implement token-based authentication

  Implemented token-based authentication to improve security.
  This will allow users to stay logged in longer without 
  re-entering credentials.
  ```

### 5. **Footer** (Optional)
The footer is useful for linking related issues or breaking changes. If the commit introduces a breaking change, it should be mentioned here with `BREAKING CHANGE:`.

>**Breaking change** is a modification that causes the existing functionality to no longer work as expected, potentially requiring users to update their code. It may alter APIs, change dependencies, or remove previously supported features. Always include the `BREAKING CHANGE:` tag in the commit message to alert others when such a change is made.

- Example:
  ```
  BREAKING CHANGE: The `auth` module now requires the 
  token field for login requests.
  ```

### Using the "!" Symbol
If a commit introduces a breaking change, you can also append a "!" to the type before the colon to indicate this directly in the message. This provides an immediate visual cue that the change may require further attention.

Example:
```
feat!(auth): change authentication flow
```

## **Examples of Complete Commit Messages**

### Example 1: Type and Description Only
```
feat: add user profile page
```

### Example 2: Type, Scope, and Description Only
```
feat(auth): implement user authentication
```

### Example 3: Type, Scope, Description, and Breaking Change
```
feat(auth): implement user authentication

BREAKING CHANGE: The login endpoint has changed from `/api/v1/login` to `/api/v2/auth/login`. Update your API calls accordingly.
```
---
### **Using Commit Messages for Releases**

When preparing for a release, use the following convention for the commit message:

- Example:
  ```
  release: 1.0.0
  ```

This indicates that the repository is preparing for a new release, and the version number should follow [semantic versioning](https://semver.org/).

---

### Summary of Best Practices:
- Use **clear, concise descriptions**.
- **Types** should reflect the purpose of the commit.
- **Scopes** are optional but useful for providing context.
- Keep the **short description** under 50 characters.
- Use the **body** and **footer** when necessary for additional details or breaking changes.

This convention will help maintain a clean and readable commit history for the KEC Computer Club website project.

---
