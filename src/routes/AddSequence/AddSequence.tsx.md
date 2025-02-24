# AddSequence Component Documentation

[Linked Table of Contents](#linked-table-of-contents)

## Linked Table of Contents

* [1. Overview](#1-overview)
* [2. Component Structure](#2-component-structure)
* [3. Function Details](#3-function-details)
    * [3.1 `AddSequence` Function](#31-addsequence-function)
* [4. Styling](#4-styling)
* [5.  Asset Usage](#5-asset-usage)


## 1. Overview

The `AddSequence` component is a React component responsible for providing a user interface to add a new sequence.  It uses several styled components for presentation and utilizes React Router for navigation. The component allows users to select a sequence, a recipient, and submit the addition via a form.  A refresh functionality is also included.


## 2. Component Structure

The `AddSequence` component renders a form containing the following elements:

*   A back button linking to the root (`/`) path.
*   A title "AddSequence".
*   Two `<Select>` components: one for choosing a sequence and another for selecting a recipient.  Both use placeholder options.
*   A `<RefreshBlock>` component containing a refresh icon and text.
*   An "Add Now" button.


## 3. Function Details

### 3.1 `AddSequence` Function

The `AddSequence` function is a simple presentational component. It does not contain any complex logic or algorithms. It renders JSX to create the user interface described above. The function's structure is straightforward, building the UI hierarchically within a div container.  No state management or data fetching is performed within this component.  Its primary responsibility is displaying the form elements and handling the navigation back to the root path.


| Element           | Description                                      |
|--------------------|--------------------------------------------------|
| `<Link to="/">`    | Provides navigation back to the root route (`/`). |
| `<BackLink>`       | A styled component for the back button.         |
| `<h2>`             | Displays the title "AddSequence".                |
| `<form>`           | Contains the sequence selection, recipient selection, refresh button, and add button. |
| `<Select>`         | Provides dropdown menus for sequence and recipient selection. |
| `<RefreshBlock>`   | A styled component for the refresh functionality. |
| `<Button>`         | A styled component for the "Add Now" button.      |


## 4. Styling

Inline styles are used for basic styling of the container div and the heading (h2).  The majority of the styling is handled by the styled components imported from `../../components/styled-components`. These components (`BackLink`, `Button`, `RefreshBlock`, `Select`) encapsulate the styling logic for their respective elements, promoting code reusability and maintainability.


## 5. Asset Usage

The component uses two SVG icons:

*   `Back` (from `./../../assets/icons/back-arrow.svg`) for the back button.
*   `Refresh` (from `./../../assets/icons/refresh.svg`) for the refresh functionality.

Both icons are displayed using the `<img>` tag with specified width and height attributes.
