using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AppEmpresa.Migrations
{
    /// <inheritdoc />
    public partial class FirstMigrations : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Product",
                columns: table => new
                {
                    productId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    productName = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    productDescription = table.Column<string>(type: "nvarchar(250)", nullable: true),
                    productDateIn = table.Column<string>(type: "nvarchar(10)", nullable: true),
                    productDateOut = table.Column<string>(type: "nvarchar(10)", nullable: true),
                    productPrice = table.Column<int>(type: "int", nullable: true),
                    productQuantity = table.Column<int>(type: "int", nullable: true),
                    productIsFaulty = table.Column<bool>(type: "bit", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Product", x => x.productId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Product");
        }
    }
}
