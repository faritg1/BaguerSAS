using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Data.Migrations
{
    /// <inheritdoc />
    public partial class Tel20 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Telefono",
                table: "empleado",
                type: "int(20)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int(12)",
                oldNullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Telefono",
                table: "empleado",
                type: "int(12)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int(20)",
                oldNullable: true);
        }
    }
}
