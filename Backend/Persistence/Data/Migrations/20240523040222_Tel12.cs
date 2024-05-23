using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Data.Migrations
{
    /// <inheritdoc />
    public partial class Tel12 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Telefono",
                table: "empleado",
                type: "int(12)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int(11)",
                oldNullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Telefono",
                table: "empleado",
                type: "int(11)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int(12)",
                oldNullable: true);
        }
    }
}
