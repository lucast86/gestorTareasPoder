CREATE TABLE Users (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Nombre VARCHAR(100) NOT NULL,
    Email VARCHAR(100) NOT NULL UNIQUE,
    FechaCreacion DATETIME DEFAULT GETDATE()
);

CREATE TABLE Tasks (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Titulo VARCHAR(200) NOT NULL,
    Descripcion VARCHAR(500),
    Estado VARCHAR(50) NOT NULL CHECK (Estado IN ('pendiente', 'en progreso', 'completada')),
    IdUsuario INT NOT NULL,
    FechaCreacion DATETIME DEFAULT GETDATE(),
    CONSTRAINT FK_Tasks_Users FOREIGN KEY (IdUsuario) REFERENCES Users(Id)
);

INSERT INTO Users (Nombre, Email) VALUES
('Lucas', 'lucas@mail.com'),
('Juan', 'juan@mail.com'),
('Ana', 'ana@mail.com');

INSERT INTO Tasks (Titulo, Descripcion, Estado, IdUsuario) VALUES
('Crear login', 'Implementar login en React', 'pendiente', 1),
('API tareas', 'Crear endpoints en .NET', 'en progreso', 1),
('Diseño UI', 'Mejorar interfaz', 'completada', 2),
('Base de datos', 'Crear tablas SQL', 'pendiente', 2),
('Testing', 'Probar endpoints', 'en progreso', 3),
('Deploy', 'Subir a servidor', 'completada', 3);