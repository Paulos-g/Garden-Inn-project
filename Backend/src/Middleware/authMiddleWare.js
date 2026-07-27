// Checks:

//Is the user logged in?

/*Request
  ↓
JWT token valid?
  ├── No → 401 Unauthorized
  └── Yes → Continue  */
// this is the main middleware
