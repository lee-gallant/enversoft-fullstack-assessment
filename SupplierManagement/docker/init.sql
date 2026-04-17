IF DB_ID('SupplierDB') IS NULL
BEGIN
    CREATE DATABASE SupplierDB;
END
GO

USE SupplierDB;
GO

IF OBJECT_ID('dbo.Suppliers', 'U') IS NULL
BEGIN
    CREATE TABLE Suppliers (
        Id INT IDENTITY(1,1) PRIMARY KEY,
        SupplierCode INT NOT NULL,
        CompanyName NVARCHAR(255) NOT NULL,
        TelephoneNo NVARCHAR(50) NOT NULL,
        CreatedAt DATETIME2 DEFAULT GETDATE()
    );
END
GO

IF NOT EXISTS (
    SELECT 1
    FROM sys.indexes
    WHERE name = 'UX_Suppliers_SupplierCode'
      AND object_id = OBJECT_ID('dbo.Suppliers')
)
BEGIN
    CREATE UNIQUE INDEX UX_Suppliers_SupplierCode ON dbo.Suppliers (SupplierCode);
END
GO

INSERT INTO Suppliers (SupplierCode, CompanyName, TelephoneNo)
SELECT v.SupplierCode, v.CompanyName, v.TelephoneNo
FROM (VALUES
    (234, 'Eskom Holdings Limited', '086 0037566'),
    (939, 'Focus Rooms (Pty) Ltd', '0820776910'),
    (34, 'GSM Electro', '0128110069'),
    (1264, 'Jody and Herman Investments CC', '0118864227'),
    (5667, 'Johan Le Roux Ingenieurswerke', '0233423390'),
    (667, 'L. J. Ross t/a Petite Cafe', '0117868101'),
    (45, 'L.A Auto Center CC t/a LA Body Works', '0219488412'),
    (1351, 'LG Tow-In CC', '0828044026'),
    (1352, 'LM Greyling t/a The Electric Advertiser', '0119545972'),
    (1437, 'M.H Cloete Enterprises (Pty) Ltd t/a Rola Motors', '0218418300'),
    (67, 'M.M Hydraulics CC', '011425 6578'),
    (1980, 'Phulo Human Capital (Pty) Ltd', '0114755934'),
    (345, 'Picaro 115 CC t/a H2O CT Services', '0216745710'),
    (2279, 'Safetygrip CC', '0117086660'),
    (876, 'Safic (Pty) Ltd', '0114064000'),
    (2549, 'The Financial Planning Institute Of Southern Africa', '0861000374'),
    (935, 'The Fitment Zone CC', '0118234181'),
    (2693, 'Turnweld Engineering CC', '0115468790'),
    (6, 'Tutuka Motor Holdings Pty Ltd t/a Tutuka Motor Lab', '0117044324'),
    (134, 'WP Exhaust Brake and Clutch t/a In Focus Fleet Services', '0219055028'),
    (3277, 'WP Sekuriteit', '0233421732'),
    (53, 'Brietta Trading (Pty) Ltd', '0115526000'),
    (392, 'C.N. Braam t/a CNB Electrical Services', '0832835399'),
    (625, 'Creative Crew (Pty) Ltd', '0120040218')
) AS v (SupplierCode, CompanyName, TelephoneNo)
WHERE NOT EXISTS (
    SELECT 1
    FROM Suppliers s
    WHERE s.SupplierCode = v.SupplierCode
);
GO
