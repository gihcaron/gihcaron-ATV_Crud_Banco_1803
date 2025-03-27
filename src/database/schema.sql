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
('Zé Neto & Cristiano e DENNIS', 'Rodeio de Paulinia', '2023-08-10', 'Camarote', 500.00, 150);





