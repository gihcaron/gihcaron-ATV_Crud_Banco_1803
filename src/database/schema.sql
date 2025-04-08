CREATE DATABASE ingressos;

\c ingressos;

CREATE TABLE ingressos (
    id SERIAL PRIMARY KEY,
    evento VARCHAR(255) NOT NULL,
    localizacao VARCHAR(255) NOT NULL,
    data_evento DATE NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    quantidade_disponivel INTEGER NOT NULL
    );

INSERT INTO ingressos (evento, localizacao, data_evento, categoria, preco, quantidade_disponivel) VALUES
('Coldplay', 'Estádio Mané Garrincha', '2026-11-20', 'Pista VIP', 1500.00, 900),
('Coldplay', 'Estádio Mané Garrincha', '2026-11-20', 'Pista', 500.00, 1000),
('Coldplay', 'Estádio Mané Garrincha', '2026-11-20', 'Camarote', 2500.00, 5000),
('Coldplay', 'Estádio Mané Garrincha', '2026-11-20', 'Arquibancada', 550.00, 1000),
('Zé Neto & Cristiano e DENNIS', 'Rodeio de Paulinia', '2023-08-10', 'Pista', 100.00, 150),
('Zé Neto & Cristiano e DENNIS', 'Rodeio de Paulinia', '2023-08-10', 'Pista Vip', 250.00, 150),
('Zé Neto & Cristiano e DENNIS', 'Rodeio de Paulinia', '2023-08-10', 'Arquibancada', 150.00, 150),
('Zé Neto & Cristiano e DENNIS', 'Rodeio de Paulinia', '2023-08-10', 'Camarote', 500.00, 150),
('Taylor Swift', 'Madison Square Garden', '2024-05-15', 'Pista', 300.00, 2000),
('Taylor Swift', 'Madison Square Garden', '2024-05-15', 'Camarote', 1200.00, 500),
('Taylor Swift', 'Madison Square Garden', '2024-05-15', 'Arquibancada', 200.00, 1500),
('Ed Sheeran', 'Wembley Stadium', '2025-07-10', 'Pista', 400.00, 3000),
('Ed Sheeran', 'Wembley Stadium', '2025-07-10', 'Camarote', 1500.00, 800),
('Ed Sheeran', 'Wembley Stadium', '2025-07-10', 'Arquibancada', 250.00, 2000),
('Beyoncé', 'Staples Center', '2024-09-20', 'Pista', 500.00, 2500),
('Beyoncé', 'Staples Center', '2024-09-20', 'Camarote', 2000.00, 600),
('Beyoncé', 'Staples Center', '2024-09-20', 'Arquibancada', 300.00, 1800),
('Bruno Mars', 'Allegiant Stadium', '2025-03-12', 'Pista', 350.00, 2200),
('Bruno Mars', 'Allegiant Stadium', '2025-03-12', 'Camarote', 1300.00, 700),
('Bruno Mars', 'Allegiant Stadium', '2025-03-12', 'Arquibancada', 250.00, 1700),
('Adele', 'The O2 Arena', '2024-11-05', 'Pista', 600.00, 1800),
('Adele', 'The O2 Arena', '2024-11-05', 'Camarote', 2500.00, 400),
('Adele', 'The O2 Arena', '2024-11-05', 'Arquibancada', 350.00, 1200),
('Drake', 'Scotiabank Arena', '2025-06-18', 'Pista', 450.00, 2000),
('Drake', 'Scotiabank Arena', '2025-06-18', 'Camarote', 1800.00, 500),
('Drake', 'Scotiabank Arena', '2025-06-18', 'Arquibancada', 300.00, 1500),
('The Weeknd', 'MetLife Stadium', '2024-08-22', 'Pista', 400.00, 2500),
('The Weeknd', 'MetLife Stadium', '2024-08-22', 'Camarote', 1600.00, 600),
('The Weeknd', 'MetLife Stadium', '2024-08-22', 'Arquibancada', 280.00, 2000),
('Shakira', 'Camp Nou', '2025-09-30', 'Pista', 350.00, 3000),
('Shakira', 'Camp Nou', '2025-09-30', 'Camarote', 1400.00, 800),
('Shakira', 'Camp Nou', '2025-09-30', 'Arquibancada', 250.00, 2500),
('Imagine Dragons', 'Red Rocks Amphitheatre', '2024-10-12', 'Pista', 300.00, 1500),
('Imagine Dragons', 'Red Rocks Amphitheatre', '2024-10-12', 'Camarote', 1200.00, 400),
('Imagine Dragons', 'Red Rocks Amphitheatre', '2024-10-12', 'Arquibancada', 200.00, 1000);





