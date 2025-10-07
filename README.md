# Angular Todos Application

A modern, feature-rich todo application built with Angular 19.2.0. This application demonstrates best practices in Angular development, including component architecture, routing, authentication, and service implementation.

## Features

- 📝 Todo management (create, read, update, delete)
- 🔐 User authentication (login/signup)
- 🚦 Route guards for protected routes
- 📱 Responsive design using Bootstrap 5.3
- 🎯 About section with company and contact information
- 🎨 Custom directive for highlighting
- ✨ Modern Angular features and best practices

## Prerequisites

- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)
- Angular CLI 19.2.17 or higher

## Angular Framework Components

### 1. Components

Components are the fundamental building blocks of Angular applications. They control a portion of the screen called a view.

```typescript
@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrl: "./todo.component.css",
})
export class TodoComponent {
  // Component logic here
}
```

Key aspects:

- **Decorator**: Uses `@Component` decorator
- **Template**: HTML view definition
- **Styles**: Component-specific CSS
- **Logic**: TypeScript class with properties and methods
- **Lifecycle Hooks**: `ngOnInit()`, `ngOnDestroy()`, etc.

### 2. Modules

Modules are containers for organizing related components, directives, pipes, and services.

```typescript
@NgModule({
  declarations: [TodoComponent],
  imports: [CommonModule],
  providers: [TodoService],
  exports: [TodoComponent],
})
export class TodoModule {}
```

Features:

- **Declarations**: Components, directives, and pipes
- **Imports**: Other modules needed
- **Providers**: Services for dependency injection
- **Exports**: Items available to other modules
- **Bootstrap**: Root component for the application

### 3. Services

Services handle data and business logic, promoting reusability and dependency injection.

```typescript
@Injectable({
  providedIn: "root",
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get("/api/todos");
  }
}
```

Characteristics:

- **Singleton**: Single instance shared across components
- **Injectable**: Can be injected into components
- **Business Logic**: Contains reusable logic
- **Data Sharing**: Facilitates component communication
- **HTTP Communication**: Handles API calls

### 4. Directives

Directives modify DOM elements and extend HTML capabilities.

Types:

1. **Structural Directives**:

   ```html
   <div *ngIf="isVisible">
     <div *ngFor="let item of items"></div>
   </div>
   ```

2. **Attribute Directives**:

   ```html
   <div [ngClass]="{'active': isActive}">
     <div [ngStyle]="{'color': textColor}"></div>
   </div>
   ```

3. **Custom Directives**:
   ```typescript
   @Directive({
     selector: "[appHighlight]",
   })
   export class HighlightDirective {
     // Directive logic
   }
   ```

### 5. Pipes

Pipes transform data for display purposes.

```html
{{ date | date:'short' }} {{ price | currency:'USD' }} {{ text | uppercase }}
```

Common use cases:

- Date formatting
- Currency formatting
- Text transformation
- Custom data transformation

### 6. Guards

Guards control route access and navigation.

```typescript
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(): boolean {
    return this.isAuthenticated();
  }
}
```

Types:

- **CanActivate**: Control route access
- **CanDeactivate**: Control navigation away
- **CanLoad**: Control lazy-loaded module loading
- **Resolve**: Pre-fetch data before navigation

### 7. Interceptors

Interceptors handle HTTP requests and responses globally.

```typescript
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authReq = req.clone({
      headers: req.headers.set("Authorization", "Bearer " + this.token),
    });
    return next.handle(authReq);
  }
}
```

Use cases:

- Authentication headers
- Error handling
- Loading indicators
- Request/Response transformation

### 8. Decorators

Decorators add metadata to classes and members.

Common decorators:

- **@Component**: Define components
- **@Injectable**: Mark services
- **@Input**: Accept data from parent
- **@Output**: Emit events to parent
- **@HostListener**: Handle host events

### 9. Templates

Templates define the component's view using Angular's template syntax.

Features:

- **Data Binding**: `{{ expression }}`
- **Property Binding**: `[property]="value"`
- **Event Binding**: `(event)="handler()"`
- **Two-way Binding**: `[(ngModel)]="property"`
- **Template Reference**: `#templateRef`

### 10. Routing

Routing enables navigation between views.

```typescript
const routes: Routes = [
  { path: "todos", component: TodoComponent },
  { path: "login", component: LoginComponent },
  {
    path: "about",
    loadChildren: () => import("./about/about.module").then((m) => m.AboutModule),
  },
];
```

Features:

- **Path Configuration**
- **Route Parameters**
- **Child Routes**
- **Lazy Loading**
- **Route Guards**

## Project Structure

```
src/
├── app/
│   ├── about/           # About section components
│   ├── home/            # Home page with todo functionality
│   ├── login/          # User authentication
│   ├── navbar/         # Navigation component
│   ├── services/       # API services
│   ├── signup/         # User registration
│   └── utils/          # Shared utilities and directives
```

## Key Components

- `TodoComponent`: Manages todo items display and interactions
- `LoginComponent`: Handles user authentication
- `SignupComponent`: Manages new user registration
- `NavbarComponent`: Navigation and user status
- `AuthGuard`: Protects routes requiring authentication
- `TodoService`: Manages todo data operations
- `UserService`: Handles user-related operations
- `HighlighterDirective`: Custom directive for UI enhancement

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Dependencies

Major dependencies used in this project:

- Angular ^19.2.0
- Bootstrap ^5.3.8
- RxJS ~7.8.0

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Additional Resources

- [Angular Documentation](https://angular.dev/)
- [Angular CLI Documentation](https://angular.dev/tools/cli)
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

svadikari
